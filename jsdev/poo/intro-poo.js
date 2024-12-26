//OBJECTIF : COMPRENDRE OBJET ET CLASSE
//OBJET : un objet ali qui encapsule des donnees (attributs) et des fonctions (methodes)
// ces methodes utilisent les atributs (par this = objet en cours = ali)

const ali = {
  //attributs,properties, fileds (data)
  genre: "homme",
  nom: "alami",
  prenom: "ali",
  age: 19,
  //methods
  afficher: function () {
    console.log(`${this.nom} ${this.prenom} a ${this.age} ans`);
  },
  //methode qui prend un parametre
  augmenterAge(nombreAnneeAAjouter) {
    this.age += parseInt(nombreAnneeAAjouter);
    console.log(`age est maintenant = ${this.age}`);
  },
  afficherAge: () => {
    console.log(`je suis ${this} ans`);
  },
  afficherNomPrenom() {
    console.log(`${this.nom} ${this.prenom}`);
  },
};

ali.afficher(); // this= objet appelant = ali
ali.augmenterAge(10);
ali.afficher();
ali.afficherNomPrenom();
// const afficherAge1=ali.afficherAge.bind(ali);// this = objet ou on a appeler l'arrow function
// afficherAge1();

const rim = { ...ali, nom: "rima", prenom: "rim", genre: "femme" };
rim.afficher();
// classe : modele/ type d'objet
class Personne {
  constructor(nom, prenom, genre, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
  }
  afficher() {
    console.log(`${this.nom} ${this.prenom} a ${this.age} ans`);
  }
  augmenterAge(nombreAnneeAAjouter) {
    this.age += nombreAnneeAAjouter;

  }
  afficherAge(){
    console.log(`je suis  ${this.age} ans`);
  }
}
//ghita = objet = instance de classe Personne
// classe = modele d'objet
// instanciation de clasee personne pour creer un objet ghita
const ghita=new Personne("karimi","ghita","femme",25);
const sara=new Personne("sari","sara","femme",20);
ghita.afficherAge();
sara.afficherAge();