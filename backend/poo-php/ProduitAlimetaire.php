<?php 
//produit : classe mere (super), base, parent
//ProduitAlimetaire herite de produit : classe fille, sous classe , sub class
class ProduitAlimentaire extends Produit{

    private $dateExpiration;
    public function __construct($libelle,$prix,$qteStock,$dateExpiration) {
        parent::__construct($libelle,$prix,$qteStock);
        $this->dateExpiration = $dateExpiration;
    }
    //redefinir la methode afficher
    function afficher()
    {
     parent::afficher();
     echo "<br>la date d'expiration est $this->dateExpiration";

    }
} 


?>