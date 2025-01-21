<?php 
//recuper le login et pwd
$l=$_POST['login'];
$p=$_POST['pwd'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>affichages des secrets</title>
</head>
<body>
    <h2>Login est <?=$l ?></h2>
    <h2>Mot de passe  est <?=$p ?></h2>
    
</body>
</html>