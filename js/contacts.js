/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

//Création format des contacts
var Contact = {
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
};

//Définition des variables une fois pour toutes
var annuaire = [];
var prenom = "";
var nom = "";
var contactX;


//création dees contacts par défaut
var contact1 = Object.create(Contact);
contact1.init("Carole", "Lévisse");
annuaire.push(contact1);
var contact2 = Object.create(Contact);
contact2.init("Mélodie", "Nelsonne");
annuaire.push(contact2);

//Lancement des suggestions
console.log("Bienvenue dans le gestionnaire de contacts ! \n 1 : Lister les contacts \n 2 : Ajouter un contact \n 0 : Quitter");
var requete = Number(prompt("Choisissez une option :"));

//Boucle while
while (requete != 0) {
    if (requete === 1) {
        console.log("Voici la liste de tous vos contacts :");
        for (var i = 0; i < annuaire.length; i++) {
            console.log("Nom : " + annuaire[i].nom + " - Prénom : " + annuaire[i].prenom + "\n");
        }
        console.log("1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");
        requete = Number(prompt("Choisissez une option"));
        }
    else {
        prenom = prompt("Rentrez le prénom :");
        nom = prompt("Rentrez le nom :");
        contactX = Object.create(Contact);
        contactX.init(prenom, nom);
        annuaire.push(contactX);
        console.log("Le nouveau contact a bien été ajouté ! \n1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");
        requete = Number(prompt("Choisissez une option"));
    };
}

//Fin de l'application
console.log("Au revoir et à bientôt !");

