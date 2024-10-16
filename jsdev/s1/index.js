
let prenom='ali';//string : chaine de caracteres
prenom="mohamed";
var nom="alami";
let nom_complet=`mon nom 
complet  est  ${nom} ${prenom}`;
 const TVA=20;
 
 const C=30;// constante locale
 {//bloc 1 
     let l=10;// variable local definit seulement dans ce bloc,
     var v =20;//portee global
    console.log('l est '+l+' v est '+v);
//bloc 1.1
    {
        console.log(' l bloc interne '+l);
    
        var  b=2;
    
         
    }
    
    
    console.log('b est '+b)
}

console.log('c est '+C)

console.log(' v 2 est '+v)
console.log('l 2  est '+l)


console.log(nom_complet);
// TVA=30;
prenom="JOHN";
let test=90;

console.log(prenom);
console.log("la tva est "+TVA)
console.log("mon prenom est "+prenom);
console.log("mon nom est "+nom);
console.log('mon premier message en javscript');




