-- Migration lot 4B : modele de la bibliotheque rattache a une demande (gratuit, inclus Optimal ou payant).
-- A executer dans l'editeur SQL de Supabase (une seule fois). Sans risque : ajout de colonnes
-- et remplacement de la seule contrainte sur le statut de la table demandes_modeles.
-- Aucune autre table, politique ou donnee n'est touchee.

alter table public.demandes_modeles add column if not exists document_id text;
alter table public.demandes_modeles add column if not exists document_nom text;
alter table public.demandes_modeles add column if not exists document_prix numeric(10,2);
alter table public.demandes_modeles add column if not exists document_inclus_optimal boolean not null default false;

-- Nouveau statut « a_payer » (En attente de paiement) : on remplace la contrainte sur le statut.
do $$
declare c record;
begin
  for c in
    select conname from pg_constraint
    where conrelid = 'public.demandes_modeles'::regclass
      and contype = 'c'
      and pg_get_constraintdef(oid) ilike '%statut%'
  loop
    execute format('alter table public.demandes_modeles drop constraint %I', c.conname);
  end loop;
end $$;

alter table public.demandes_modeles
  add constraint demandes_modeles_statut_check
  check (statut in ('recue', 'en_preparation', 'a_payer', 'livree', 'sans_suite'));
