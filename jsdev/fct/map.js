const t=[1,2,3];
const d=t.map( e=> e*2);
console.log(t,d);
const prenom=["ali","alaa","rim","kawtar"];
const prenomMaj=prenom.map((e,i,ar)=> `<li>${e}</li>`);
console.log(prenomMaj,prenom);
//camelCase 
// "background-color"=>"backgroundColor";
let mot="background-color";
let  tmot=mot.split("-");
console.log(tmot[0],tmot[1]);
let partTwo=tmot[1].split("").map((e,i)=>(i==0) ? e.toUpperCase():e).join("");
console.log(tmot[0]+partTwo);
let m=mot.split("-").map((e,i)=>i==0? e:e.split("")[0].toUpperCase()+e.substring(1)  ).join("");
console.log('m est ',m);
//substring 
console.log("hello word".substring(6,8));
console.log(mot.split("-")[0]+mot.split("-")[1][0].toUpperCase()+mot.split("-")[1].substring(1));
//indexOf
let position_TIRET=mot.indexOf('-');//10
let tm=mot.split("");
tm[position_TIRET]="";
tm[position_TIRET+1]=tm[position_TIRET+1].toUpperCase();
console.log('indexOf',tm.join(""));
//
let tmo=mot.split("");
tmo.splice(position_TIRET,2,tmo[position_TIRET+1].toUpperCase());
console.log(tmo.join(""))
;
let tmo2=mot.split("");
console.log(tmo2.filter(e=>e!='b');
// let x=[10,20,30,40];
// x.splice(1,2,99,"ali","hicham")
// console.log(x);