-- Migration : historique des emails libres envoyes a un client depuis l'admin
-- (compositeur d'email de la page /admin/echanges-fichiers).
-- A executer dans l'editeur SQL de Supabase (une seule fois).
-- N'affecte aucune table, colonne, politique ou donnee existante : uniquement un ajout.

create table if not exists public.emails_clients (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  sujet text not null,
  corps text not null,
  created_at timestamptz not null default now()
);

create index if not exists emails_clients_user_id_idx on public.emails_clients(user_id);

alter table public.emails_clients enable row level security;

-- Lecture reservee au client concerne (coherent avec le reste du dossier), si vous
-- souhaitez un jour l'afficher aussi cote espace client. Les routes admin passent par
-- la cle service role, qui contourne la RLS et voit donc l'historique de tous les clients.
drop policy if exists "emails_clients_lecture_proprietaire" on public.emails_clients;
create policy "emails_clients_lecture_proprietaire"
  on public.emails_clients
  for select
  using (auth.uid() = user_id);
