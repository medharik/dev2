const t=[1,20,3,0];  
// t=10; incorrect
// t[0]=10; correct
// trouver le deuxieme nombre le plus grand 
//exemple : [1,20,3,0];  => 3


// trier un tableau 
console.log(t);
function plusNMax(t,n) {
  return  t.sort( (a,b)=>b-a   )[n-1];//[20,3,1,0]
}
//version 2 
const plusMax2=(t,n)=>t.sort( (a,b)=>b-a   )[n-1];
// version 3 
const plusMax3=(t,n)=>{
    t.sort( (a,b)=>b-a   );
    return t[n-1];
};

// le premier plus grand  plusNMax(t,1)
// le 2eme  plus grand  plusNMax(t,2)
// le 3eme  plus grand  plusNMax(t,3)
console.log(plusNMax(t,2));


//inverser un mot 
// exemple : "bonjour" => "ruojnob"
let e1="bonjour".split('');
console.log('e1',e1);
e1.reverse();
console.log('e2',e1);
let x=e1.join('');
console.log('e3',x);
let mc="RADA";
console.log(mc.split("").reverse().join(""));
const inverse=mc.split("").reverse().join("");
console.log(inverse.split("")[0]);
