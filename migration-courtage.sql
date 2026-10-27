-- Migration : back-office courtage (dossiers de courtage + journal horodate)
-- A executer dans l'editeur SQL de Supabase (une seule fois).
-- N'affecte aucune table, colonne, politique ou donnee existante : uniquement des ajouts.

-- 1. Dossiers de courtage.
-- user_id designe le CLIENT proprietaire du dossier.
-- etape : demande_recue, besoins_recueillis, consultation, proposition, conclu, sans_suite.
create table if not exists public.dossiers_courtage (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  reference text not null unique,
  profil text not null default 'particulier' check (profil in ('particulier', 'professionnel', 'association')),
  objet text not null,
  etape text not null default 'demande_recue' check (etape in ('demande_recue', 'besoins_recueillis', 'consultation', 'proposition', 'conclu', 'sans_suite')),
  recueil_besoins text,
  recueil_le timestamptz,
  assureurs_consultes text,
  remuneration_note text,
  fiche_envoyee_le timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists dossiers_courtage_user_id_idx on public.dossiers_courtage(user_id);

alter table public.dossiers_courtage enable row level security;

-- Lecture : le client ne voit que ses propres dossiers. Les routes admin passent par la cle
-- service role, qui contourne la RLS. Aucune politique d'ecriture : le client ne modifie rien.
drop policy if exists "dossiers_courtage_lecture_proprietaire" on public.dossiers_courtage;
create policy "dossiers_courtage_lecture_proprietaire"
  on public.dossiers_courtage
  for select
  using (auth.uid() = user_id);

-- 2. Journal horodate des actions sur un dossier (conserve comme preuve).
-- visible_client = true : l'evenement apparait dans le suivi du client.
-- detail : texte complet associe (version des exigences et besoins, message du cabinet...).
create table if not exists public.dossiers_courtage_evenements (
  id uuid primary key default gen_random_uuid(),
  dossier_id uuid not null references public.dossiers_courtage(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  type text not null,
  libelle text not null,
  detail text,
  visible_client boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists dossiers_courtage_evenements_dossier_idx on public.dossiers_courtage_evenements(dossier_id);
create index if not exists dossiers_courtage_evenements_user_idx on public.dossiers_courtage_evenements(user_id);

alter table public.dossiers_courtage_evenements enable row level security;

-- Lecture : le client ne voit que les evenements marques visibles de ses propres dossiers.
-- Les notes internes du cabinet (visible_client = false) ne lui sont jamais exposees.
drop policy if exists "dossiers_courtage_evenements_lecture_client" on public.dossiers_courtage_evenements;
create policy "dossiers_courtage_evenements_lecture_client"
  on public.dossiers_courtage_evenements
  for select
  using (auth.uid() = user_id and visible_client = true);
