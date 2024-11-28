const libelle=["hp","dell","sony","acer","legion"];

const libelleRemoved=libelle.splice(1,3);
console.log(libelle);//[ 'hp', 'legion' ]
console.log(libelleRemoved);//[ 'dell', 'sony', 'acer' ]
const removeLastLIbs=libelle.splice(-1,1);
console.log(libelle);//[ 'hp' ]
const numbers=[2,6,1,3,4];
const removedNumbers=numbers.splice(-2,2);
console.log(numbers,removedNumbers);
//supprimer le premier (shift)
const x=[1,2,4,6,9];
const firstElement=x.splice(0);
console.log(x, firstElement);


