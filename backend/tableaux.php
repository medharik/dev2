<?php 
//tableau : variable qui contient plusieurs valeurs 
$note=10;//variable simple
$tnote1=array(1,5,8,33,88);//variable tableau
$tnote=[1,5,8,33,88,"ali",13.5,$note];//variable tableau
$tprix=[100,50,300];
//longueur d'un tableau : length
$loNote =count($tnote);
//premier valeur 
echo $tprix[0]." ".$tprix[count($tprix) - 1];
echo $tnote[0]." ".$tnote[count($tnote) - 1];
//creer un programme qui  : 
// 1- calcul le nombre de prix corrects (>0)
// 2- calcul la somme des prix corrects
//3- trouve le prix max et le prix min (correct)
//4- creer 2 tableaux : un tableau qui contient des prix corrects et un autre des prix incorrects;
// le prix moyen 
//push : ajouter a la fin 
$n=[];
// int t[3];
//push de 9
$n[]=9;
$n[]=90;
$n[]=7;
print_r($n);

$price=[300,2400,8,-9000,-6,10];
$longeur=count($price);
$somme=0;
$max=$price[5];
$min=$price[3];
// $somme+=$price;
for ($i=0; $i <count($price) ; $i++) { 
    $somme+=$price[$i];
    if ($max<$price[$i]) {
        $max=$price[$i];
    }
if($min>$price[$i]){
$min=$price[$i];
}
}
$moyenne=$somme/$longeur;
echo"<h1>le nombre des prix est $longeur</h1>";
echo"<h1>la somme des  prix est $somme</h1>";
echo"<h1>la moyenne  des  prix est $moyenne</h1>";
echo"<h1>le max est $max , le min est $min</h1>";

?>