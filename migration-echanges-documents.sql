-- Migration : echange de fichiers securise, espace client <-> cabinet
-- A executer dans l'editeur SQL de Supabase (une seule fois).
-- N'affecte aucune table, colonne, politique ou donnee existante : uniquement des ajouts.

-- 1. Table de suivi des fichiers echanges.
-- user_id designe toujours le CLIENT proprietaire du dossier (que le fichier ait ete
-- depose par lui ou par le cabinet a son intention).
create table if not exists public.documents_partages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  nom_fichier text not null,
  chemin_storage text not null,
  taille bigint,
  type_mime text,
  depose_par text not null default 'client' check (depose_par in ('client', 'cabinet')),
  created_at timestamptz not null default now()
);

create index if not exists documents_partages_user_id_idx on public.documents_partages(user_id);

alter table public.documents_partages enable row level security;

-- Lecture : le client ne voit que les fichiers de son propre dossier (les siens et ceux
-- deposes par le cabinet a son intention). Les routes admin passent par la cle service role,
-- qui contourne la RLS, et voient donc l'ensemble des clients.
drop policy if exists "documents_partages_lecture_proprietaire" on public.documents_partages;
create policy "documents_partages_lecture_proprietaire"
  on public.documents_partages
  for select
  using (auth.uid() = user_id);

-- Suppression : un client ne peut supprimer que ses propres depots, jamais un fichier
-- envoye par le cabinet (garde une trace de ce qui a ete transmis).
-- Sert de garde-fou en defense en profondeur ; les routes API utilisees en pratique
-- passent par la cle service role et appliquent deja cette meme regle en code.
drop policy if exists "documents_partages_suppression_proprietaire" on public.documents_partages;
create policy "documents_partages_suppression_proprietaire"
  on public.documents_partages
  for delete
  using (auth.uid() = user_id and depose_par = 'client');

-- 2. Bucket de stockage prive.
-- Aucune politique storage n'est necessaire : l'acces se fait exclusivement via des liens
-- signes generes cote serveur (cle service role), apres verification de l'appartenance
-- du fichier au bon client. Organisation des fichiers dans le bucket : un dossier par
-- utilisateur, nomme d'apres son identifiant (ex. {user_id}/2026-08-21-piece-identite.pdf).
-- file_size_limit et allowed_mime_types sont appliques par Supabase lui-meme, en plus de
-- la validation cote code : meme si la route API etait contournee, le depot serait refuse.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'documents-partages',
  'documents-partages',
  false,
  20971520, -- 20 Mo
  array['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/heic', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
on conflict (id) do update set
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
