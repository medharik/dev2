//exercice :
const dell={libelle: 'dell d3',prix: 3000,quantite: 10,marque:'dell'};
const sony={libelle: 'sony s3',prix: 7000,quantite: 0,marque:'sony'};
const acer={libelle: 'acer  a3',prix: 5000,quantite: 10,marque:'acer'};
const acerx={libelle: 'acer  ax',prix: 7000,quantite: 0,marque:'acer'};
const produits=[dell,sony,acer,acerx];
// a- un programme  qui trouve le(s) produit(s) le plus cher
// on trouve le prix max 
let max=produits[0].prix;
let p_max=0;
// on parcourt le tableau produits
for (let i = 0; i < produits.length; i++) {
if (max<produits[i].prix) {
    max=produits[i].prix;
    p_max=i;
}
    
}
console.log('les produits les plus chers sont :');
for (let i = 0; i < produits.length; i++) {
 if(produits[i].prix==max){
let {libelle,prix,marque}=produits[i];
     console.log(libelle,prix,marque);
 }   
}

//b- creer un tableau qui contient toutes les marques ['dell','sony'.'acer'];

//recuperer le libelle et le prix de dell et les mettres dans
//  des variables qui portent le meme nom
let {libelle,prix}=dell;
// console.log(libelle,prix); //dell d3 3000

// //recuperer le libelle et le prix de dell et les mettres dans
// //  des variables x,y
// let {libelle: x,prix: y}=dell;
// //creer un produit a partir de dell avec un libelle : iMac (meme prix et qte)
// const imac={...dell,libelle: 'iMac',reduction:10 };
// imac.reduction=0;
// imac.marque='APPLE';//ajouter une property
// delete imac.marque;
// console.log(imac); // { libelle: 'iMac', prix: 3000,
// console.log(imac);
