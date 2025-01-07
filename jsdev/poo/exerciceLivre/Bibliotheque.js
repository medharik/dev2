const { Livre, atomic_habits, best } = require("./Livre.js");
class Bibliotheque {
  constructor(nom, livres) {
    this.nom = nom;
    this.livres = livres;
  }
  afficher() {
    console.log(`le nom de la biblio est ${this.nom}`);
  }
  afficherLivres() {
    this.livres.forEach((livre) => livre.afficher());
  }

  addLivre(livre) {
    this.livres.push(livre);
  }
  removeLivre(id) {
    // [].splice(0,1);
    // let pos=this.livres.findIndex(e=>e.id===id);
    // this.livres.splice(pos,1);
    this.livres = this.livres.filter((l) => l.id != id);

    // [{id:1,"atomic..."},{id:2,"best"},{id:3,"th java"}];
  }
  findBookById(id) {
    let book = this.livres.find((e) => e.id == id);
    if (book) return book;
  }
  findBookByTitre(titre) {
    let book = this.livres.find((e) => e.titre == titre);
    if (book) return book;
  }
  findBooksByAuteur(auteur) {
    let books = this.livres.filter((e) => e.auteur == auteur);
    if (books) return books;
  }
}

//tests :

// const atomic_habits = new Livre(1, "Atomic Habits", "james clear");
// const best = new Livre(2, "Best Habits", "james fontaine");
const biblioCasa = new Bibliotheque("Biblio de Casa", [atomic_habits, best]);
const thinkingJava = new Livre(3, "thinking JAVA", "james clear");
biblioCasa.addLivre(thinkingJava);
biblioCasa.removeLivre(1);
biblioCasa.afficher();
biblioCasa.afficherLivres();
let book = biblioCasa.findBookById(6);
let books=biblioCasa.findBooksByAuteur("james clear");
// if(book)
console.log(`le livre recherche est ${book?.titre} `);
// else console.log("not found");

console.log(`livres de james clears sont ${books}`);
books.forEach(b=> b.afficher());