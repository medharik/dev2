<?php 
//variables
//exercice 1 : calculer la surface 
$largeur=10;
$longueur=5;
//calculer la surface
$surface=$largeur*$longueur;
// afficher un message 
echo "<h2> la surface est : $surface </h2>";
// exercice 2 : 
$euro=200;
$taux=1.09;
$enDollar=$euro*$taux;
echo "<h2>le montant de $euro Euro = $enDollar $</h2>";
echo '<h2>le montant de $euro Euro = $enDollar $</h2>';
echo '<h2>le montant de'.$euro.' Euro ='. $enDollar.' $</h2>';
//echo "<h2>le montant de $euro Euro =". $euro*$taux. " $</h2>";
//les conditions 
//exercice 3 :
$age1=29;
$age2=29;
if ($age1>$age2) {
   echo "age1 > age2 <br>";
} else if($age1==$age2) {
    echo "age 1 = age 2";
    
}else{
    echo "age1 < age2 <br>";
}

//exercice de reduction 
$prix=500;
$qte=2;
$total=$prix*$qte;
$reduction=0;
echo "le total est $total<br>";
if ($total<0) {
echo "Erreur";
}else if($total<100) {// comme " $total>=0 (else ) && $total<100
echo "reduction de 0%";
$reduction=0;
}else if($total<500){
    $reduction=10;
    echo "reduction de 10%";
}else if($total<=1000){
    $reduction=20;
    echo "reduction de 20%";
}else{
    $reduction=30;
    echo "reduction de 30%";
}

$total_reduit=$total*(1-$reduction/100);
echo "le total est $total , apres reduction de $reduction% , vous ne payerez que $total_reduit";
echo "<br>";
// autre methode
if ($total<0) {
    echo "Erreur";
    }
    
    
    if($total<100 && $total>=0) {// comme " $total>=0 (else ) && $total<100
    echo "reduction de 0%";
    }
    
    if($total>=100 && $total<500){
    echo "reduction de 10%";
    }
     if($total>=500 && $total<1000){
    echo "reduction de 20%";
    }
    
    if($total>=1000){
        echo "reduction de 30%";
    }
    


?>