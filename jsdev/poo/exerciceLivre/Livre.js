class Livre {
  constructor(id, titre, auteur) {
    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
  }
  afficher() {
    console.log(
      `id= ${this.id}, titre du livre est ${this.titre} son auteur est ${this.auteur} `,
    );
  }
  afficherAuteur() {
    console.log(`auteur : ${this.auteur}`);
  }

  modifierAuteur(new_author) {
    this.auteur = new_author;
  }
  getTitre(){
    return this.titre;
  }
  setTitre(new_title){
    this.titre=new_title;
  }
}

//classe : Livre
//objet : atomic_habits
//new Livre : instancie la classe Livre pour creer l'objet atomic_habits
const atomic_habits = new Livre(1, "Atomic Habits", "james clear");
const best = new Livre(2, "Best Habits", "james clear");

atomic_habits.afficher();
// atomic_habits.modifierAuteur("JAMES BOND");
atomic_habits.setTitre("ATOMIC HABIT");
atomic_habits.afficher();
module.exports={Livre,atomic_habits, best};