<?php 
require("./Produit.php");
require("./ProduitAlimetaire.php");
//instancier Produit
$hp=new Produit("hp dv 7",9000,10);
// echo $hp->qteStock;
$hp->setPrix(-4000);
// $hp->prix=-9000
// $hp->prix=-9049\
$hp0->prix="test";
$hp->afficher();
echo "<br>le prix est ". $hp->getPrix()."<br>";
echo "<br>le PRIX TAXE COMPRISE est ". $hp->calculerTtc()."<br>";
//ENCAPSULATION : (PROTECTION DES DONNEES)
// POURQUOI L'UITLISER
//1- UN DES PRINCIPES DE LA POO
//2- PROCTECTION DES DONNEES
// COMMENT?
//EN DECLARANT PRIVATE (POUR EMPECHER LEURS ACCES DIRECTE)LES ATTRIBUTS ET EN N'AUTIRISANT LEURS LECTURE OU CONSULTATION(GETTERS)
// OU ECRICTURE (MODIFICATION) (PAR SETTERS) 
$lait=new ProduitAlimentaire("lait uht salim",10,20,"01/02/2025");
$yaghourt=new ProduitAlimentaire("Danone 00 ",3,20,"01/03/2025");
echo "le prix taxe comprise du ".$lait->getLibelle()." est ".$lait->calculerTtc();
// $lait->afficher();
// $lait->afficherProduitAlimentaire();
//HERITAGE - INHERITENCE
//1- UN DES PRINCIPES DE LA POO 
// 2- EVITER LA ERDONONDANCE (LA REPITITION DU CODE), REUTILISER L'EXISTANT (MEME SI ON PAS DE CODE SOURCE)
//3- PERMETTRE LA SPECIALISATION

//le polymorphisme  : meme  nom mais comportement different selon l'objet
//1- UN DES PRINCIPES DE LA POO
$produits=[$lait,$hp,$yaghourt];
foreach ($produits as $p) {
    $p->afficher();
}



?>