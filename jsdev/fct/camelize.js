let s="background-color";//=> "backgroudColor";
console.log(s.split(""));
const t=s.split("");
const position=t.indexOf("-");
// console.log(t.indexOf("x"))
t.splice(position,1);
t[position]=t[position].toUpperCase();

for (let i = position; i < t.length; i++) {
   t[i]=t[i].toUpperCase();
    
}
console.log(t.join(""));
//methode 2 
s="background-color";
let x =s.split("-");
const d=x[1].split("");
d.splice(0,1,'C');
console.log('d',x[0]+d.join(""))
