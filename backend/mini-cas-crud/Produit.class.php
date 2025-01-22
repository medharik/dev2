<?php
include_once("utils.php");
class Produit
{
    //attributs 
    public $libelle;
    public $qtestock;

    // $hp=new Produit("hp dv7",300);
    public function __construct($libelle, $qtestock)
    {
        $this->libelle = $libelle;
        $this->qtestock = $qtestock;
    }
    //méthodes
    //ajouter
    public function ajouter()
    {
        //connexion bd
        $cnx = connecter_db();
        //prepare sql
        $rp = $cnx->prepare("insert into produit(libelle,qtestock) values(?,?)");
        //execute
        $rp->execute([$this->libelle, $this->qtestock]);
    }
    //supprimer
    public static function supprimer($id)
    {
        //connexion bd
        $cnx = connecter_db();
        //prepare sql
        $rp = $cnx->prepare("delete from produit where id=?");
        //execute
        $rp->execute([$id]);
    }
    //modifier
    public function modifier($id)
    {
        //connexion bd
        $cnx = connecter_db();
        //prepare sql
        $rp = $cnx->prepare("update produit set libelle=?,qtestock=? where id=?");
        $rp->execute([$this->libelle, $this->qtestock, $id]);
    }
    //selectionner tous les produits
    public  static function all()
    {
        //connexion bd
        $cnx = connecter_db();
        //prepare sql
        $rp = $cnx->prepare("select * from produit order by id desc");
        //execute
        $rp->execute();
        $produits =  $rp->fetchAll();
        return $produits;
    }
    //selectionenr de selectionner produit par id
    //selectionner tous les produits
    public static function findById($id)
    {
        //connexion bd
        $cnx = connecter_db();
        //prepare sql
        $rp = $cnx->prepare("select * from produit where id=?");
        //execute
        $rp->execute([$id]);
        $produits =  $rp->fetch(); //$produit1
        return $produits;
    }
}
