// lib/courtage-partenaires.ts
// Liste des entreprises d'assurance et des grossistes avec lesquels le cabinet travaille.
// Article L.521-2, II, 1°, b) du Code des assurances : le cabinet n'etant pas exclusif et ne
// fondant pas son analyse sur un nombre suffisant de contrats du marche, il informe le
// souscripteur eventuel du nom des entreprises d'assurance avec lesquelles il peut travailler
// et travaille.
//
// Cette liste n'est affichee sur AUCUNE page publique. Elle est communiquee uniquement :
//  - dans l'espace client de la personne qui a un dossier de courtage ;
//  - dans la fiche d'information precontractuelle envoyee par e-mail avant la souscription.
//
// Pour la renseigner, ajoutez un nom par ligne entre guillemets, par exemple :
//   'Nom de la compagnie A',
//   'Nom du grossiste B',
// Tant que la liste est vide ET que le champ "assureurs consultes" du dossier est vide,
// l'administration refuse de passer un dossier en "proposition transmise" et d'envoyer la fiche.

export const PARTENAIRES_COURTAGE: string[] = []
