const t=[2, 7, 11, 15],x=9;
// console.log(twoSum(t,x)); // [0, 1]
const twoSum=(t=[], x=0)=>{
let somme=0;
p=[];
for (let i = 0; i < t.length; i++) {
    somme =t[i];
    for (let j = i; j < t.length; j++) {
              
         if(t[i]+t[j]==x) {
            p.push([i,j]);
         }    
    }
}
return p;

}
console.log(twoSum([2, 7, 11, 15], 9)); // Résultat : [[0, 1]]
console.log(twoSum([1, 2, 3, 4, 5], 6)); // Résultat : [[1, 3], [2, 2]]
// Résultat : { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
const charFrequency=(s="")=>{
    const h={};
s.split("").forEach((c,i)=>{
    h[c]=0;
    for (let j = 0; j < s.length; j++) {
      if(s.split("")[j]==c){
h[c]+=1;
      }
      
    }
}
);
return h;
}

    console.log(charFrequency("hello")); 
    // Résultat : { h: 1, e: 1, l: 2, o: 1 }
    console.log(charFrequency("javascript")); 