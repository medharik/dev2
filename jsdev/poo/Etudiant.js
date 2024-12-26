class Etudiant {
    //methode speciale , son role principal est d'initialiser les attributs
    constructor(nom,prenom,age,genre) {
        this.nom=nom;
        this.prenom=prenom;
        this.age=age;
        this.genre=genre;
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
const TVA=20;
module.exports={TVA,Etudiant};