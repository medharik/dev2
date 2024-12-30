const Student=require('./Student.js');
class Groupe {
  constructor(nom, listeEtudiants) {
    this.nom = nom;
    this.listeEtudiants = listeEtudiants;
  }

  ajouterEtudiant(etudiant) {
    this.listeEtudiants.push(etudiant);
  }
  afficher(){
    console.log(`le groupe est : ${this.nom}`);
    this.afficherListeEtudiant();
  }

  afficherListeEtudiant(){
    this.listeEtudiants.forEach(etudiant => etudiant.afficher());
  }
  rechercherEtudiant(nomEtudiant){

    const etudiantRecherche=this.listeEtudiants.find(e=>e.nom===nomEtudiant);
    if(etudiantRecherche) etudiantRecherche.afficher();
   else console.log("etudiant introuvable"); 
  }
  
}

// Créer un groupe
const john=new Student("Doe","john",30,"homme");
const di2=new Groupe("di2",[john]);
const ali=new Student("alami","ali",19,"homme");
const rim=new Student("karimi","aya",23,"femme");
di2.ajouterEtudiant(ali);
di2.ajouterEtudiant(rim);
di2.afficher();
di2.rechercherEtudiant("Doe");