let t=[2,3,4,6,1,2];
let x=1;
//defition/creation : fonction ajouter qui recoit deux nombres et nous donne (return) leur somme
function ajouter(a,b) {
    
    let somme =a+b;
    return somme;
}

let v=10,z=11;
//appel(call/execution)
let s=ajouter(v,z);

console.log("la somme est ",s);
s=ajouter(10,20);
console.log("la somme est ",s);

function exist(x=0, t=[]) {
    let  found=false;
for (let i = 0; i < t.length; i++) {
  if (t[i]==x)      found=true;
    
}
return found;

}

// exemple d'appel de la fonction
let tab=[1,4,6];
let r=5;
if (exist(r,tab)) {
    console.log(`${r} se trouve dans le tableau `,t);
} else {
    console.log(`${r}  ne se trouve pas  dans le tableau `,t);
    
}

// named function 
function multiliper(a,b){
    return a*b;
}
let p=multiliper(2,3);


// closure ou fonction lambda 
const  darb =function (a,b){
    return a*b;
}
// call 
p=darb(1,3);

// arrow function : fonction flechee
const  darb2 = (a,b) => {
    return a*b;
}
// call 
p=darb2(1,3);
// arrow function : fonction flechee
const  darb3 = (a,b) =>  a*b ;

// call 
p=darb3(1,3);