const   etudiants=[
    {nom:'Jean',prenom:'Dupont',age:20,note:15},
    {nom:'Pierre',prenom:'Durand',age:22,note:18},
    {nom:'Marie',prenom:'Martin',age:21,note:12},
    {nom:'Karimi',prenom:'Karim',age:16,note:5}
    ];
    const w=etudiants;
    w[0].prenom='samir';
    etudiants[0].age=100;
    console.log(etudiants[0].prenom,w[0].age);


//passage par valeur 
let x=10;// x=10
let y=x;//passage par valeur : y= la valeur de x =10 mais avec une adresse memoire (reference) differente

y=9;// y a la valeur 9 sans sa propre memoire (adresse)
console.log(x,y);//x=10,y=9


    let a=[1,2,3];
    let b=a;
    let c=[...a] ;
    b[1]=13;
    c[1]=26;
console.log(a,b,c);







let d=9;
let f=d;//passage par valeur (clone)
f=5;
console.log(d,f);
const  bougayou={nom:'bougayou',prenom:'mouaad'};
const lemlih=bougayou;//par reference
lemlih.prenom='othmane';
console.log(bougayou,lemlih);