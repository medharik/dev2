// ex1
let a =[1,2];
let x="0";
let y=0;
let z=0.0;

for (let i = 0; i < a.length; i++) {
    x+=a[i];
    y+=a[i];
    z+=a[i];   
}
console.log(x,y,z);
//bonne reponse   : "012",3,3

//ex2 :
let c=10;
while(c-- > 7){
    console.log('A',c);
}
// REP 1 : A 9, A 8,A 7
//APRES LA SORTIE DE LA BOUCLE c=6
while(--c > 2){
    console.log('B',c);
}
// B 5, B 4 , B 3  