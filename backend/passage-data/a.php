<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>page d'envoi</title>
</head>

<body>
    <h2>Envoi par lien</h2>
    <a href="b.php?libelle=hp&prix=5000">HP</a>
    <a href="b.php?libelle=DELL&prix=7000">DELL</a>
    <h2>Envoi par form get (lien)</h2>
    <form action="b.php" method="get">

        Libelle : <input type="text" name="libelle" id="">
        Prix : <input type="text" name="prix" id="">
        <button>Envoyer</button>
    </form>
  
  
    <h2>Envoi par form post (les datas sont masquees dans le lien )</h2>
    <form action="secret.php" method="post">
        Login : <input type="text" name="login" id="">
        Mot de passe  : <input type="password" name="pwd" id="">
        <button>Envoyer</button>
    </form>


</body>

</html>