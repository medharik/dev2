<?php
class Etudiant
{   //attributs (data)
    public $nom;
    public $prenom;
    public $age;
    //constructeur
    public function __construct($nom, $prenom, $age)
    {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->age = $age;
    }
    //methodes (fonctions ou programmes)

   public function afficher()
    {
        echo "Nom : $this->nom <br>";
        echo "Prenom : $this->prenom <br>";
        echo "Age : $this->age <br>";
    }
    //une methode qui ajouter u nombre d'annee a l'age 
    function ajouter_annee($nombre_annee)
    {
        $this->age += $nombre_annee;
    }

    //une methode qui reduit l'age par un nombre_annee
    function reduire_annee($nombre_annee){
        $this->age -= $nombre_annee;

    }
    //retourne  le nom complet
    function full_name(){
    return "$this->nom  $this->prenom";
    }
}

