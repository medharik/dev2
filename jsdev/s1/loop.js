//les tableaux : ensemble de donnees 
//declarer un tableau en JS: 
//tableau indexe (numerote a partir de 0)
let tab = [1, 2, 3, 4, "5","ali"];
console.log("le tableau est ",tab,1,"test",1.4); // affiche [1, 2, 3, 4,5]
console.log('le premier est '+tab[0]);
console.log('le dernier est '+tab[4]);
console.log(tab.length);
let somme=0;
console.log(parseFloat("ali")*2) 
for (let i = 0; i < tab.length; i++) {
    if(! isNaN(tab[i])){
        somme+= parseFloat(tab[i]);   // '5'=>5.0    
// "5"*1=> 5
    }
}
console.log('la somme est '+somme);
console.log(`la somme est ${somme}`);
console.log("A".charCodeAt(0));
//while 1
let h=0; 
while (h++<3) {
console.log('h1',h)
}
console.log('h apres la premiere while est ',h);//
while (++h<5){
    console.log('h2',h);
}

