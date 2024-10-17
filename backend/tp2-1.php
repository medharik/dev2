<?php 
//boucle : bloc repetitif
//1- boucle for : souvent utilisee pour un nombre d'iteration fixe
//i++ incrementatuion par 1 <=> i+=1 ou i=i+1
//i+=2 ou i=i+2 incrementation par 2 
//i-- decrementation par 1 ou i-=1 ou i=i-1
//i-=3 decrementation par 3 ou i=i-3
$d=0;
$f=10;
$sommePair=0;
$sommeImPair=0;
$nombrePair=0;
$nombreImPair=0;
for ($i=$d;false ; $i++) { 
 echo "<li>i est $i</li>";
 //somme des pairs
 if ($i%2==0) {
    $sommePair+=$i;
    $nombrePair++;
 } else {
    $sommeImPair+=$i;
    $nombreImPair++;
 }
 


}
//affichage des resultats
echo "la somme des nombres pairs : $sommePair, leurs nombre est de $nombrePair<br>";
echo "la somme des nombres impairs : $sommeImPair, leurs nombre est de $nombreImPair<br>";




$x=90;
// modulo : %
if($x%2==0){
    echo "x est pair";
}else{
    echo "x est impair";

}

//2- boucle while : utilisee pour un nombre d'iteration variable (repeter la demande de resaisie du mot de passe )



?>