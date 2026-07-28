-- Migration : mentorat consultant qualité (espace cloisonne)
-- A executer dans l'editeur SQL de Supabase (une seule fois).

-- 1. Drapeau d'acces sur les comptes.
-- Un compte avec acces_mentorat_qualite = true est dirige vers /espace-mentorat-qualite
-- a la connexion et ne peut pas acceder a l'espace client classique.
alter table public.users
  add column if not exists acces_mentorat_qualite boolean not null default false;

-- 2. Table de suivi des commandes d'accompagnement.
create table if not exists public.dossiers_mentorat_qualite (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete set null,
  montant numeric,
  mode_paiement text not null default 'carte',
  stripe_session_id text,
  statut text not null default 'en_cours',
  created_at timestamptz not null default now()
);

alter table public.dossiers_mentorat_qualite enable row level security;

-- Lecture par le titulaire du dossier uniquement.
-- L'ecriture passe exclusivement par la cle service role (webhook), qui contourne la RLS.
drop policy if exists "dossiers_mentorat_lecture_proprietaire" on public.dossiers_mentorat_qualite;
create policy "dossiers_mentorat_lecture_proprietaire"
  on public.dossiers_mentorat_qualite
  for select
  using (auth.uid() = user_id);

-- 3. Bucket prive de la boite a outils du consultant.
-- Aucune politique storage n'est creee volontairement : les fichiers ne sont accessibles
-- que via l'API du site (cle service role), apres verification du drapeau acces_mentorat_qualite.
-- Organisez les fichiers en dossiers dans le bucket : chaque dossier devient une rubrique
-- dans l'onglet Boite a outils de l'espace (ex. 01-trames-contractuelles, 02-grilles-evaluation).
insert into storage.buckets (id, name, public)
values ('mentorat-qualite', 'mentorat-qualite', false)
on conflict (id) do nothing;

-- 4. Activation manuelle d'un acces (sans passer par un paiement Stripe), si besoin :
-- update public.users set acces_mentorat_qualite = true where email = 'adresse@exemple.fr';
-- insert into public.dossiers_mentorat_qualite (user_id, montant, mode_paiement, statut)
--   select id, null, 'virement', 'en_cours' from public.users where email = 'adresse@exemple.fr';
