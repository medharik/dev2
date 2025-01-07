<?php 
class Produit{
    //les attributs
    public  $libelle;
    //scope / la portee / ou la visibilite
    private  $prix;
    protected  $qteStock;

    public function setPrix($prix){
        if($prix>=0) $this->prix=$prix;
        else echo "erreur : le prix doit etre >=0<br>";
    }
    public function getPrix(){
        return $this->prix;
    }
    function setLibelle($libelle){
        if(!empty($libelle))
        $this->libelle = $libelle;
    else echo "Erreur, libelle est obliagoire";
    }
    function getLibelle(){
        return $this->libelle;
    }
    public function __construct($libelle,$prix,$qteStock) {
       $this->libelle=$libelle;
       $this->prix=$prix;
       $this->qteStock=$qteStock;
    }

public function afficher(){
   echo "<hr>Libelle : $this->libelle <br>";
    echo "Prix : $this->prix <br>";
    echo "Qte en stock : $this->qteStock <br>";
    // echo "<br>----------------<br>";
}
// overriding = REDEFINITION
public function calculerTtc(){
  return $this->prix*1.20;
}

}


   