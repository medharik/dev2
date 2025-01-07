<?php 
// require("./Etudiant.php");
$ali=new Etudiant("alami","ali",19);
$rim=new Etudiant("DIANE","RIM",20);
$ali->afficher();
$ali->ajouter_annee(2);
$ali->afficher();
$nomcomplet=$ali->full_name();
echo "le nom complet est $nomcomplet<br>";
echo "le nom complet de rim est ". $rim->full_name()  ."<br>";
?>