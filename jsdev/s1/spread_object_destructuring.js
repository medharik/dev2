//spread
const a=[1,2,3];
const x=a;
x[0]=12;
const y=[...a];
y[0]=20;
console.log(x[0],a[0],y);
const  b=[...a,4,5,6];// ... => SPREAD
const t=a.concat([4,5,6]);//[...a,4,5,6]
console.log(a,b,t);
const ali={nom:'alami',prenom: 'ali',age:20};
let {nom,age}=ali;

const hicham=ali;
const clone={genre:'homme',...ali,adresse: 'casablanca',nom:'clone'};
hicham.nom='karimi';
console.log(ali,hicham,clone);
const rim={...ali,age:30,prenom:'rim'};
console.log('rim',rim.age,rim['age']);
const p='age';
console.log('age de rim ',rim.p,rim[p],rim['p']);
const ghita={prenom: 'ghita',age:23};
const prenom="john";
const test={prenom: prenom,age: 0 ,ville: 'rabat',x: x};
console.log('test',test)
rim.age=20;

//OBJECT DETRUCTURING 
const hp={libelle: 'hp dv6',prix:5000,quantite:20};
const lib=hp.libelle;
const quantite0=hp.quantite;
const prix0=hp['prix'];//ou hp.prix
//descructuration d'objet
const {prix: prix,quantite: qte}=hp;
// prix=330;
console.log('le prix est ',prix,'la qte est ',qte);


