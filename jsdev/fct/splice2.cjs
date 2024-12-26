const { camelCase } = require("yargs-parser");

// supprimer des elements dans un tableau 
const t=[1,3,2.4];
// const s=t.splice(2,2);
// t.pop();
// t.pop();


console.log(t);
// l'ajout (insert ) dans un tableau 
t.splice(3,0,5,6,7) ;
// ajouter 9 au debut 
// t.splice(0,0,9);
// t.unshift(9);
console.log(t);
const r=[1,2,4,5];
//remplacer des elements dans un tableau 
//remplacer 2 et 4 par 0 et 3
r.splice(1,2,0,3,11);
console.log(r)
const CamelCase=(s)=> s.split(/[- \s]+/).map((e,i)=> i===8? e:e[0].toUpperCase()+substr(1,e.length-1) );
console.log(camelCase("hello word"));