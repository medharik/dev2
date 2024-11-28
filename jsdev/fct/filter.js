//exercice 1 :
// recuperer tous les nombres pairs
const a = [1, 2, 5, 8, 6, 12, 15, 10];
const b = a.filter((x) => x % 2 === 0);
console.log("b est ", b);
//exercice 2 :
const c = a.filter((e) => e >= 10);
console.log("exercice 2 ", c);
//exercice 3 :
const users = [
  { id: 1, prenom: "john", isActive: true },
  { id: 2, prenom: "jane", isActive: true },
  { id: 3, prenom: "jack", isActive: false },
  { id: 4, prenom: "jill", isActive: true },
];
const usersInActive = users.filter((e) => !e.isActive);
console.log("exercice 3 ", usersInActive);
//exercice 4 :
const passwords = ["test1234", "azerty", "1234", "al", "a"];
//on veut recuperer les mots de passe ayant moins de 5 caracteres
const passwordsShort = passwords.filter(e=>e.length<5);

console.log("exercice 4 ", passwordsShort);
//exercice 5 :
//recuperer les valeurs d'un tableau comprise entre deux valeurs
//exemple ax=[1,3,6,7,10] et les 2 valeurs sont  1,6 => p=[1,3,6]
const  ax= [10, 3, 60, 16,16, 10];
const setx=new Set(ax);
console.log('setx',setx);
const px=[...setx];
// const bx=px.filter(e=> e>=10 && e<=20);
const bx=px.filter(e=> {
    if (e>=10) {
        if(e<=20) return true;
        else return false;
    }else {
        return false;
    }
});
console.log("exercice 5 ", bx);