const { camelCase } = require("yargs-parser");

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
// add elements to the array
const ar=[1,5,9,0,2];
// const  added=ar.splice(0,0,10);
// console.log(ar,added);
ar.forEach((e,i,arr) => {
    // arr[i]='test'+i;
    console.log(`index ${i} , element : ${e} , array  : `,ar)
// if (i==1) ar.shift();
});
console.log(ar.find((e,i)=>e===50));
console.log(ar)
let result = ar.map(function(item, index, array) {
    // array[index]=22;
    console.log(`${item}, ${index},${array}`)
    return item * 2;
  });
  console.log('result map',result,ar);
  //reduce 
  const s=ar.reduce((sum,current)=> {
    console.log(sum,current);
    return sum + current;
  },0);
  console.log(`somme est ${s}`);
  console.log(ar.some((e,i)=>{
    console.log(e,i);
    return e==5;
  }));
const camelize=(str)=>{
if(str.includes('-')){
    return str.split('').map((e,i,arthis)=>{

        if(e==='-') {
            arthis[i+1]=arthis[i+1].toUpperCase();
            return '';
            
        }else return e;


    }).join("");
}
}
  //camelize("background-color") == 'backgroundColor';
console.log('camelize',camelize("background-color"))
const camelize2=(s)=>{
    s.split('-').map((e,i)=> i===0? e:e.toUpperCase() );
}
console.log('camelize2',camelize("background-color"))
function sum(a, b) {
  return a + b;
}
const y=[1,2,3,5];
const CamelCase=(s)=> s.split(/[ -]+/).map((e,i)=> i===0? e:e[0].toUpperCase() );
console.log('camelCase',camelCase('b-co'));
module.exports = {sum,y,camelCase};