let l=10;//declarer une variable
var v =40; // declarer une variable  ()
const TVA=20;// declarer une constante


// scope = portee ou visibite : " globale et locale"
//bloc de code
//bloc 1
{
    
    var va=25;// meme locale , l va afire le rehosting (elle sera definit meme en dehor de ce bloc comme une varible gloable)
    let le=20;//decalarer une variable locale a ce bloc 

    {
        console.log('le est '+le)
        let  le2=10;
        var v2=9;
        const TVA=20;
        
        console.log('le 2 est '+le2)
        
    }

//  console.log('le 3 est '+le2)
    
}

console.log('v2 est '+v2)



console.log('va ='+va)
// console.log('le ='+le)


console.log('l = '+l);
console.log('v = '+v);
console.log("TVA = "+TVA);
//les tableaux en javascript : ES6+ ou ECMA 6 (d partir de 2015)
