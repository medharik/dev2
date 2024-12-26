function sommeAbsolue(a,b) {
    if(a<0) a*=-1;
    if(b<0) b*=-1;
    return a+b;
}
function dif(a,b) {
    return a-b;
}
const TVA=20;
const notes=[12,18,10];
// const x=notes;
// console.log(x===notes);
module.exports={sommeAbsolue,dif,TVA,notes};