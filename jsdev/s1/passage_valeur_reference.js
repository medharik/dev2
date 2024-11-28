
//passage par valeur 
let x=10;// x=10
let y=x;//passage par valeur : y= la valeur de x =10 mais avec une adresse memoire (reference) differente

y=9;// y a la valeur 9 sans sa propre memoire (adresse)
x=11;
// d=&x;
console.log(x,y);//x=10,y=9


    let a=[1,2,3];//a est une reference (adresse,pointeur)
    let b=a;//passage par adresse (reference) b et a ont la meme  valeur de l'adresse (cad les 2 pointent vers le meme tableau)

    b[1]=13;// <=> a[1]=13
    let c=[...a] ;// clone : js va creer une nouvelle memoire(nouvelle adresse) qui contient les valeurs du tableau de la memoire ou pointe l'adresse a

    console.log(a[1],b[1]);
    c[1]=26;
console.log(a,b,c);