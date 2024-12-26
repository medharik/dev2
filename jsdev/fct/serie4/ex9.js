// ['ka','patrice','ali','hicham']
//=> ['ka','hicham']
const  filterMotsLongPair = (mots)=> mots.filter(e=> {
   return  e.length%2===0;
}
);
module.exports=filterMotsLongPair;