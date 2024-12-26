let phrase="je fais de la programmation en JS suivant le planning ";
let words = phrase.split(" ");
let mot=words.filter(e=> e.startsWith("p"));
console.log(mot[0]);