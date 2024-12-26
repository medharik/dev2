//['hp','dell','acer','xp'];=>['dell','acer']
//voyelles = 'a','e','u','i','o','y'
//voyelles = ['a','e','u','i','o','y']
const mots=['hp','dell','acer','xp'];
const voyelles = ['a', 'e', 'u', 'i', 'o', 'y'];

;
console.log(mots.filter( mot =>    {
   for (let i = 0; i < mot.length; i++) {
   if(   voyelles.includes(mot[i]) ) return true;
   }
}  ));