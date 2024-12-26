//['ali','ka','hicham'] => ['ka','ali','hicham']
// tri => sort 
// const mots= ['ali','ka','hicham'];
// const motsTrie=mots.sort((a,b)=> a.length-b.length);
// console.log('les mot tries sont ',motsTrie)
function trierParLongeur(mots){
    return mots.sort((a,b)=> a.length-b.length);
}
module.exports=trierParLongeur