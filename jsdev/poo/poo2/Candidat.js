const Student=require('./Student.js');
class Candidat extends Student {
    constructor(niveau,nom,prenom,genre,age) {
        super(nom,prenom,age,genre);
        this.niveau=niveau;
    }
} 