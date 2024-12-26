const { Etudiant, TVA } = require("./Etudiant.js");

class Groupe {
  constructor(nom, etudiants) {
    this.nom = nom;
    this.etudiants = etudiants;
  }
  afficher() {
    console.log(`le groupe est ${this.nom}`);
    this.afficherListeDesEtudiant();
  }
  ajouterEtudiant(etudiant) {
    this.etudiants.push(etudiant);
  }
  afficherListeDesEtudiant() {
    this.etudiants.forEach(e=> e.afficher());
  }
}

const othmane=new Etudiant("Elmlih","othmane",20,"homme");
const haitam=new Etudiant("Moussaoui","Haitam",21,"homme");
const khawla=new Etudiant("Douma","Khawla",19,"femme");
const di2=new Groupe("di2",[khawla]);
di2.ajouterEtudiant(othmane);
di2.ajouterEtudiant(haitam);
di2.afficher();