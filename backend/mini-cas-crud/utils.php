<?php 
function connecter_db(){
    $dbname="dbminicas";
    $host="localhost";
    $username="root";
    $password="";
    $cnx = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    return $cnx;
}
?>