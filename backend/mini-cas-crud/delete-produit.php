<?php 
include_once("Produit.class.php");
//quel id ?? http://localhost/dev2/backend/mini-cas-crud/delete-produit.php?id=4
$id=$_GET['id'];
Produit::supprimer($id);
header("location:liste-produits.php");


?>