<?php 
include_once("Produit.class.php");
//recupere les data
$libelle=$_POST['libelle'];
$qtestock=$_POST['qtestock'];
//ajouter le produit dans la bd
//creer un produit
$p=new Produit($libelle,$qtestock);
$p->ajouter();
header("location:liste-produits.php");
?>