class Student{
    //constructeur : methode speciale , son role principal : initialiser les attributs
    //lors de l'instanciation d'objet
    constructor(nom,prenom,age,genre){
        this.nom=nom;
        this.prenom=prenom;
        this.age=age;
        this.genre=genre;
    }

    afficher(){
        console.log(`${this.politesse()} ${this.nom} ${this.prenom} a ${this.age} ans `);
    }
    politesse(){
        return (this.genre==="homme") ?  "Mr.":"Mme.";
    }
}

//construire des objets depuis la classe Student
//ali , rim sont des objets de la classe Student : ali etv rim sont instances 
//Student : classe => modele utilise pour construire des objets

const ali=new Student("alami","ali",19,"homme");
const rim=new Student("karimi","aya",23,"femme");
ali.afficher();
rim.afficher();
module.exports=Student;
