<?php 

//exercice : 
$ages=[10,20,10,30,10,20];
//1-une fonction qui recoit un nombre et nous retourne la frequence de nomber dans ce tableau
//exemple     $f=freq(10,$ages);($f=3)
//creation (DEFINITION)
function freq($num,$tab)  {
 $count=0;
 foreach ($tab as $e) {
if ($e==$num) {
   $count++;
}
 }
 return $count;
}
function majeur($age)  {
    if ($age>18) {
       return "majeur";
    } else {
        return "mineur";
    }
    
}
//call de majeur
$m=majeur(10);
echo "il est $m<br>";
echo "il est ". majeur(10) ."<br>";
//CALL (appel ou execution) de la fonction
$c=freq(30,$ages);
echo " 30 est repete $c fois, donc on a $c ";
function pluriels($nombre) {
    if ($nombre>1) {
        return "s";
    } else {
        return "";    
    }
    
}
$nombreMajeur=2;
echo "<h2>on a $nombreMajeur majeur ".pluriels($nombreMajeur)."</h2>";




?>