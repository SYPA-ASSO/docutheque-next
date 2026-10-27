-- Migration : demandes de modeles de documents (espace client -> back-office)
-- A executer dans l'editeur SQL de Supabase (une seule fois).
-- N'affecte aucune table, colonne, politique ou donnee existante : uniquement un ajout.

create table if not exists public.demandes_modeles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  type_document text not null,
  contexte text,
  date_souhaitee date,
  statut text not null default 'recue' check (statut in ('recue', 'en_preparation', 'livree', 'sans_suite')),
  reponse_client text,
  livree_le timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists demandes_modeles_user_id_idx on public.demandes_modeles(user_id);
create index if not exists demandes_modeles_statut_idx on public.demandes_modeles(statut);

alter table public.demandes_modeles enable row level security;

-- Lecture : le client ne voit que ses propres demandes. Les creations et les mises a jour
-- passent par les routes serveur (cle service role, qui contourne la RLS).
-- Aucune politique d'ecriture : le client ne modifie rien directement.
drop policy if exists "demandes_modeles_lecture_proprietaire" on public.demandes_modeles;
create policy "demandes_modeles_lecture_proprietaire"
  on public.demandes_modeles
  for select
  using (auth.uid() = user_id);
