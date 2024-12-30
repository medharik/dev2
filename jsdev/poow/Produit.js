//creer un PROTOTYPE/MODELE  des objets HP et DELL  : CLASSE
// classe : Produit (modele qu'on  utilise pour creer des objets)
//objet : hp,dell
//on dit que : 
// hp et dell sont des objets  : des instances de la classe Produit
//Produit : classe 

class Produit{
    //constructeur : methode qui initialise les attributs
constructor(libelle,prix,qteStock,marque){
    this.libelle=libelle;
    this.prix=prix;
    this.qteStock=qteStock;
    this.marque=marque;
}
//methode pour afficher les attributs
afficher(){
    console.log("le libelle est "+this.libelle+", le prix est "+this.prix+"€");
    console.log("la marque est "+this.marque);

    this.afficherQteStock();
}

  //methode : afficherQteStock
  afficherQteStock() {
    console.log("la quantite en stock est "+this.qteStock);
    }

}

//creer (construire/instance des objets de la classe Produit)
//instancier la classe Produit pour contruire l'objet hp
let hp= new Produit("hp dv7",4500,20,"HP");
let dell=new Produit("dell SATELITE 4",7500,0,"DELL");
let sony=new Produit("sony vaio",6500,100,"SONY");
hp.afficher();
dell.afficher();
sony.afficher();
//POINTS TRAITES : 
// POO
//CLASSE , OBJET 
//CONSTRUCTEUR
//ATTRIBUTS : DATA
//ET METHODES : FONCTIONS
