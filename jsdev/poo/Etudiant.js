class Etudiant {
    //methode speciale , son role principal est d'initialiser les attributs
    constructor(nom,prenom,age,genre) {
        this.nom=nom;
        this.prenom=prenom;
        this.age=age;
        this.genre=genre;
    }
//getters  : methodes qui retournent la valeur d'un attribut
//setters : methodes qui modifient la valeur d'un attribut
//exemple de get 
getNom(){
    return this.nom.toUpperCase();
}
setNom(nom){
    if(nom.length>=2)
    this.nom=nom;
else console.log("le nom doit avoir min 2 caracteres");
}
getPrenom(){
    return this.prenom;
}
setPrenom(prenom){
this.prenom=prenom;
}
get fullName(){  //let x=ali.fullName;
    return this.nom + " " + this.prenom;
}
set fullName(fullName){// ali.fullName="alami mohamed"
    // "alami ali".split(" ");
this.nom=fullName.split(" ")[0];
 this.prenom=fullName.split(" ")[1];
}

    afficher(){
        console.log(`${this.politesse()} ${this.nom} ${this.prenom} a ${this.age} ans`)
    }
    politesse(){
        return (this.genre==="homme")? "Mr.":"Mme.";
    }
}
// instanciation de classe etudiant pour contruire un objet ali
//objet ali est une instance de classe Etudiant
// la classe Etudiant est le Modele qui nous permer de construire des objets comme ali et rim 
// lorsqu'on on utilse new (instancier) , le programme appelle automatoquement le constructeur

const ali=new Etudiant("DOE","JOHN",29,"homme");
const rim =new Etudiant("alami","rim",16,"femme");
// console.log(`${ali.nom} ${ali.prenom} a ${ali.age} ans`)
// console.log(`${rim.nom} ${rim.prenom} a ${rim.age} ans`);
// ali.afficher();
// rim.afficher();
ali.setNom("ali");
ali.afficher();
ali.fullName="ALAMI Mohamed";
console.log(`le nom complet est ${ali.fullName}`)
const TVA=20;
module.exports={TVA,Etudiant};