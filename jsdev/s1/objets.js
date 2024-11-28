// var h;
// undefined==null =>true
// undefined===null =>false
//"1"==1 => true
// "1"===1 =>false
let ali={nom :"alami",prenom:"ali",age:23};
console.log('OBJET : ',ali);
console.log('le nom est '+ali.nom);
console.log('le prenom est '+ali.prenom);
console.log("l'age est "+ali.age);
ali.genre='homme';// ali['genre'] : notation tableau
ali.nom='karimi';
console.log('OBJET 2 : ',ali);
ali['prenom']='SAMIR';// ou ali.prenom (notation objet ) //JSON (javascript object notation) : fromat de donnees interoperable : crossPlateform
console.log('OBJET 3 : ',ali);
ali['nationalite']='marocain';//ali.
ali.prenom="ali";
console.log('OBJET 4 : ',ali);
delete ali.nationalite;// supprime l'attribut ou la propriete de l'objet ali: nationalite
delete ali['nom'];// supprime l'attribut ou la propriete de l'objet ali: nationalite
console.log('OBJET 5 : ',ali);
let x='prenom';
console.log(ali[x],ali.age); 
//undefined et null
var d;
// hoiting (la remontee des variables)

console.log('d',d)
// undefined : valeur par defaut de la variable qui n'a pas ete declaree 
// console.log(h);
console.log(h);
{
    let p;
    var   h=100;// hoiting de h

}
// h=null;
console.log(h,undefined===null);
let rim={nom:'rima',prenom:'rim',age:10};
let hicham={nom:'hichami',prenom:'hicham',age:5};
let karim={nom:'karimi',prenom:"karim",age:15};
let etds=[rim,hicham,karim];
let etudiant_min;
// trouver  le plus jeune etudiant
let min=etds[0].age;
let pos_min=0;
for (let i = 0; i < etds.length; i++) {
    let etudiant = etds[i];
    if (etudiant.age<min) {
        min=etudiant.age;
        pos_min=i;
        etudiant_min=etudiant;

    }
    
}
console.log('le plus jeune etudiant est :',etds[pos_min].prenom,etds[pos_min].nom);
console.log('le plus jeune etudiant est :',etudiant_min.prenom,etudiant_min.nom);
// autre methode pourutiliser les objets en JS
let o=new Object();// let o={};
o.libelle="hp";
o.prix=1000;
console.log('o',o);
// 

let hichami={
    //attributs ou fields
    nom:'hichami',
    prenom:'hachim',
    age:10,
    //fonctions (methods)
    afficher: function(){
        //this est obligatoire pour acceder aux attributs de cet objet
        console.log(this.nom,this.prenom,this.age);
    },
    majeur : ()=>{
        if(this.age>18) console.log(this.nom+" est majeur");
        else  console.log(this.nom+" est mineur");
    },
    nomComplet: function(){
        return this.nom+" "+this.prenom;
    }
}
hichami.afficher();
hichami.majeur();
let n=hichami.nomComplet();
console.log('nom complet est  '+hichami.nomComplet())
