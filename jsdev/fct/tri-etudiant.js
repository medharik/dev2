const  etudiants=[
    {id:1,nom:"Ahmedo",prenom:"Mohamed",age:20},
    {id:1,nom:"Boukhris",prenom:"Ali",age:30},
    {id:5,nom:"Omari",prenom:"othmane",age:12},
    {id:4,nom:"Ahmedi",prenom:"Mohamed",age:23}
];

// trier parv age les etudiants 
etudiants.sort(  (a,b) =>b.age-a.age );
console.log(etudiants);
// const {nom,prenom}=etudiants[0];
let {nom,prenom}=etudiants[0];
console.log('le plus age est '+nom+" "+prenom);
// const copie=etudiants.sort((a, b) => a.nom.localeCompare(b.nom)*-1);
// const copie=etudiants.sort((a, b) =>{
//     if(a.id===b.id) return b.prenom-a.age;
//     else return a.id-b.id;
// });
// console.log('etudiant classes par age ',etudiants,copie);

function lePlusAge(t) {
  t.sort((a,b)=>b.age-a.age);
return t[0].nom+" "+t[0].prenom;
}
console.log(lePlusAge(etudiants));
