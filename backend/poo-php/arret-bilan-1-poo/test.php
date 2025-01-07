<?php 

require_once("./Personne.class.php");
require_once("./Etudiant.class.php");
//instancier Personne 
$ali=new Personne(1,"alami","ali");
$alla=new Etudiant(3,"alla","bilal","DI2");
$alla->afficher();
//afficher les informations de Personne
$np=$ali->full_name();
echo "le nom complet est $np<br>";
echo "le nom complet est ".$ali->full_name();
$ali->_prenom="JOHN";
$ali->setId(23);
echo "<br>le nom complet est ".$ali->full_name();
?>