<?php
//rappel :
//exemple 1 : definir une fonction ajouter qui recoit 2 nombre et retourne leurs somme
function ajouter($x = 0, $y = 0)
{
    $somme = $x + $y;
    return $somme;
}

// appel (call ou execution) de la fonction ajouter
$s = ajouter(5, 7); // affiche 12
echo "<p>la somme est $s</p>";
echo "<p>la somme est " . ajouter(null, 2) . "</p>";



//1- Definir une fonction qui return true si un nombre se trouve dans un tableau

//  $e=est_dans_tableau(1,[2,3,4,1]) ;//$e=true
//  $e=est_dans_tableau(7,[2,3,4,1]) ;//$e=false

function est_dans_tableau($s = 0, $t = [])
{

    $trouve = false;
    for ($i = 0; $i < count($t); $i++) {

        if ($t[$i] == $s) {
            // $trouve = true;
            // break;// sort de la boucle 
            return true;
          
        }
    }
    return false;
}
$tab=[0,2,4,7,1];
$s=4;
if (est_dans_tableau($s,$tab)) {
  echo "$s est dans le tableau<br>";
} else {
    echo "$s n'est pas  dans le tableau<br>";
   
}

 $somme=0;

//2- creer une fonction qui retourne   la somme des nombres dans un tableau
function somme_tableau($tab=[])  {
    $somme =0;//variable locale a la fonction somme_tableau
    foreach ($tab as $v)  {
       $somme+=$v;
    }
    return $somme;
}
// echo $somme;
$so =somme_tableau([1,0,2]) ;

echo "la somme est $so<br>";
//3 - creer une fonction qui affiche la moyenne des nombres dans un tableau
function moyenne_tableau($tab=[])  {
echo "la moyenne est ". somme_tableau($tab)/count($tab);
}
//4- creer une fonction qui inverse un tableau 
//exemple inverser([1,2,3]) retourne [3,2,1]

function inverser_tableau(&$tab=[]) {
$copie=[];
for ($i=count($tab)-1;$i>=0;$i--){
$copie[]=$tab[$i];
}
$tab=$copie;

}
$tab=[1,2,3,4];
inverser_tableau($tab);
print_r($tab);
