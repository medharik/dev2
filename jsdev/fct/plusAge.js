// CREER UN FONCTION QUI PERMET D'AFFICHER LE NOM ET LE PRENOM DE(S) L'ETUDIANT
// LE PLUS AGE 
const  etudiants=[
    {id:1,nom:"Ahmedo",prenom:"Mohamed",age:20},
    {id:3,nom:"Boukhris",prenom:"Ali",age:30},
    {id:1,nom:"Omari",prenom:"othmane",age:12},
    {id:4,nom:"Ahmedi",prenom:"Mohamed",age:23}
];
[9,1,3,10].sort((a,b)=> a-b);
etudiants.sort((a,b)=> {
    if(a.id==b.id) return b.age-a.age;
    else return a.id-b.id;
});
console.log(etudiants);