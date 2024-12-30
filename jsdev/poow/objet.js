// creation d'un objet : hp
let hp = {
    //attributs / fields
    libelle: "hp",
    prix: 4000,
    qteStock: 20,
    marque:'HP',
    //methode (methods): (fonction d'un objet) 
    afficher: function(){
        console.log("le libelle est "+this.libelle+", le prix est "+this.prix+"€");
        console.log("la marque est "+this.marque);
        this.afficherQteStock();
    },
    //methode : afficherQteStock
    afficherQteStock() {
    console.log("la quantite en stock est "+this.qteStock);
    }
}

// creation d'un objet : dell
let dell = {
    //attributs / fields
    libelle: "dell",
    prix: 7500,
    qteStock: 0,
    marque:'DELL',
    //methode (methods): (fonction d'un objet) 
    afficher: function(){
        console.log("le libelle est "+this.libelle+", le prix est "+this.prix+"€");
        console.log("la marque est "+this.marque);
        this.afficherQteStock();
    },
    //methode : afficherQteStock
    afficherQteStock() {
    console.log("la quantite en stock est "+this.qteStock);
    }
}



//tester : 
hp.afficher();
hp.libelle="hp dv7";
hp.prix=5000;
hp.afficher();
console.log("la qte est "+hp.qteStock);
dell.afficher();
