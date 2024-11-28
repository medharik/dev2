<?php
//tableau : variable qui contient plusieurs valeurs 
$note = 10; //variable simple
$tnote1 = array(1, 5, 8, 33, 88); //variable tableau
$tnote = [1, 5, 8, 33, 88, "ali", 13.5, $note]; //variable tableau
$tprix = [100, 50, 300];
//longueur d'un tableau : length
$loNote = count($tnote);
//premier valeur 
echo $tprix[0] . " " . $tprix[count($tprix) - 1];
echo $tnote[0] . " " . $tnote[count($tnote) - 1];
//creer un programme qui  : 
// 1- calcul le nombre de prix corrects (>0)
// 2- calcul la somme des prix corrects
//3- trouve le prix max et le prix min (correct)
//4- creer 2 tableaux : un tableau qui contient des prix corrects et un autre des prix incorrects;
// le prix moyen 
//push : ajouter a la fin
$n = [];
// int t[3];
//push de 9
$n[] = 9;
$n[] = 90;
$n[] = 7;
print_r($n);

$price = [300, 2400, 8, -9000, -6, 10];
$longeur = count($price);
$somme = 0;
$max = $price[5];
$min = $price[3];
// $somme+=$price;
for ($i = 0; $i < count($price); $i++) {
    $somme += $price[$i];
    if ($max < $price[$i]) {
        $max = $price[$i];
    }
    if ($min > $price[$i]) {
        $min = $price[$i];
    }
}
$moyenne = $somme / $longeur;
echo "<h1>le nombre des prix est $longeur</h1>";
echo "<h1>la somme des  prix est $somme</h1>";
echo "<h1>la moyenne  des  prix est $moyenne</h1>";
echo "<h1>le max est $max , le min est $min</h1>";
//exercice 2 - tableaux 
// calculer la somme, min et max des prix positifs
$tprice = [9, 100, -10, 200, -1, 2];
$somme = 0;
$min = $max = $tprice[0];
$pos_min = 0;
for ($i = 0; $i < count($tprice); $i++) {
    if ($tprice[$i] > 0) {
        $somme += $tprice[$i];
        if ($tprice[$i] < $min) {
            $min = $tprice[$i];
            $pos_min = $i;
        }
        if ($tprice[$i] > $max) $max = $tprice[$i];
    }
}

$tpricePositif = [];
for ($i = 0; $i < count($tprice); $i++) {
    if ($tprice[$i] > 0) {
        $tpricePositif[] = $tprice[$i];
    }
}
$somme = 0;
for ($i = 0; $i < count($tpricePositif); $i++) {
    $p = $tpricePositif[$i];
    $somme += $p;
    if ($p > $max) $max = $p;
    if ($p < $min) $min = $p;
}

echo "<ul>";
echo "<li> somme  : $somme</li>";
echo "<li> min  : $min</li>";
echo "<li> max  : $max</li>";
echo "</ul>";
$s = 0;
//foreach 

$tableaux = [10, 0, 16, 20, 14];
echo $tableaux[0];// $tableaux[0] est la valeur(10), sa cle (key)=0
$max = $min = $tableaux[0];
foreach ($tableaux as $k=>$x) {
    $s += $x;
    if ($x > $max) $max = $x;
    if ($x < $min) $min = $x;
}
echo "foreach : <ul>";
echo "<li> somme  : $s</li>";
echo "<li> min  : $min</li>";
echo "<li> max  : $max</li>";
echo "</ul>";
 echo "<hr>";
 //tableaux indexes (numerote a partir de 0)
 $t=[0=>10,1=>12,2=>5];
//  $t=[10,12,5];
foreach ($t as $key => $value) {
    echo "<li>$key : $value ou $t[$key] </li>";
};
//tableaux associatifs (hash) 
$pc1=["libelle"=>"hp","prix"=>5000,"processeur"=>"i3","dd"=>500,"ram"=>8,"marque"=>"HP"];
foreach ($pc1 as $key => $value) {
echo "<li>$key est $value</li>";
}
// ex 1 - foreach
//$tnote=[12,8,9,0];
//calculer la note moyenne (moyenne=somme/nombre_note)
//la note max  et min 
//  creer un tableau pour ajouter les notes <10
//afficher le nombre de matieres en ratrappage  (  note<10)
$tnote=[12,8,9,0];
$somme=0;
$moyenne=0;
$min=$max=$tnote[0];
$ratt=[];
foreach ($tnote as $key => $value) {
    $somme+=$value;
    if ($value > $max)  $max = $value;
if ($value<$min) {
    $min = $value;
}
if($value<10){
    $ratt[] = $value;//push
}
} 
$moyenne=$somme/count($tnote);

foreach ($ratt as $value) {
    echo "<li>$value</li>";
}
$nbr=count($ratt);
echo "le nombre des modules en ratrappage est $nbr <br>";
echo "la moyenne des notes est: $moyenne<br>";
echo "le min est : $min et le max est :$max ";



// ex 2 - foreach
$alami=["nom"=>"alami","prenom"=>"ali","age"=>23];
$doe=["nom"=>"doe","prenom"=>"john","age"=>17];
$rahim=["nom"=>"rahim","prenom"=>"aya","age"=>10];
//trouver le plus jeune etudiant 
$etudiants=[$alami,$doe,$rahim];
$min=$etudiants[0]["age"];//23
$pos_min=0;
$jeune=[];
foreach ($etudiants as $i=>$e) {

    if ($e['age']<$min) {
        $min=$e['age'];
        $pos_min=$i;
        $jeune=$e;
    }
}
// afficher les informations de l'etudiant le plus jeune
echo "<br>l'age min est ".$min."<br>";
echo "<br>l'etudiant le plus jeune  est ".$etudiants[$pos_min]['nom']." ".$etudiants[$pos_min]['prenom']."<br>";
echo "<br>l'etudiant le plus jeune  est ".$jeune['nom']." ".$jeune['prenom']."<br>";







