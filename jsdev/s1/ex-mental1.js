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
//ex2 :
let c=10;
while(c-- > 7){
    colog('A',c);
}
while(--c > 2){
    console.log('B',c);
}