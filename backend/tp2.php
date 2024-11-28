<?php 
//les boucles  : bloc a repition

//1- boucle for : souvent utilisee pour un nombre d'iteration connu a l'avance
$fin=10;
$debut=0;
$sommePair=0;
$sommeImPair=0;
$nombrePair=0;
$nombreImPair=0;
for ($i=$debut; $i <=$fin ; $i++) { 
  if ($i%2==0) {
    $sommePair+=$i;
    $nombrePair++;
} else {
    $sommeImPair+=$i;
    $nombreImPair++;
  }
  

}
echo "somme des nombres pairs : $sommePair <br>";
echo "somme des nombres Impairs : $sommeImPair <br>";
echo "nombre des nombres pairs : $nombrePair <br>";
echo "nombre des nombres impairs : $nombreImPair <br>";

//somme des nombres pair , impair
//nombre des nombres pair , impair
$x=11;
if($x%2==0){
echo "$x est pair";
}else{
    echo "$x est impair";

}



?>