<?php 
require_once("./Personne.class.php");
class Etudiant extends Personne{

    public $_filiere;

public function __construct($id,$nom,$prenom,$filiere) {
   parent::__construct($id,$nom,$prenom);
$this->_filiere=$filiere;

}
//redefinir afficher de la classe mere
public function afficher(){
    echo "------------<br>";
    //reutilisation
    parent::afficher();
    echo "<br> la filiere ".$this->_filiere;
    echo "<br>------------<br>";

}
}


?>