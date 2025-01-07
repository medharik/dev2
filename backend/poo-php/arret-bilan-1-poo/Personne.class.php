<?php 
 class Personne{
//attrributs
private  $_id;
protected $_nom;
public $_prenom;

//initialiser les attributs

public function __construct($id,$nom,$prenom) {
    $this->_id = $id;
    $this->_nom = $nom;
    $this->_prenom = $prenom;
}
//setId : modifier l'id
public function setId($id) {
if(is_numeric($id) && $id>0){
$this->_id=$id;
}else {
    echo "<p style='color:red'>Impossible de modifier l'id , NB : id doit un nombre positif</p>";
}
}
//getId : consulter (lire) id
public function getId() {

    return $this->_id;
}

public function afficher(){
echo "$this->_nom $this->_prenom , id : $this->_id";
}
public  function full_name(){
return  "$this->_nom $this->_prenom, id : $this->_id";
}


 }


 //instanciation (new) : construire un objet (ali) a partir de la classe (Personne)
 //lors de l'instanciation, c'est le constructeur qui est appele 
 $ali=new Personne(1,"Alami","Ali");




