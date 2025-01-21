<?php 
//3 extensions pour faire communiquer php avec un sgbdr (comme mysql : natif)
//1. Mysql_ : +=> facile, -=> securite, OBSOLETE 
//2. MySQLi_ : +=> facile , - => SECURITE , MONO_SGBDR (fonctionne seulement pour mysql)
//3. PDO (PHP Data Objects) : + => SECURISE + CROSS-SGBDR , - => difficile (necessite des bases en POO)
//exemple de connexion entre php et mysql en utilisant PDO


function connecter_db() {
    $cnx = new PDO('mysql:host=localhost;dbname=dbdi225', "khalid", "123456");

    return $cnx; 
}

function supprimer_produit($id) {
    $cnx=connecter_db();
    $rp=$cnx->prepare("delete from produit  where id=$id");
    $rp->execute();
}

supprimer_produit(4);



?>