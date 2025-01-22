<?php 
require_once("Produit.class.php");

$produits=Produit::all();//all methode statique (methode de classe) (pas this)

// $produit1=Produit::findById(2);
// print_r($produit1);

// print_r($produits);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>liste des produits</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>

<body oncontextmenu="return false">

    <h2>Liste des produits</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>id</th>
                <th>Libelle</th>
                <th>qtestock</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
<?php foreach($produits as $p ) {?>
            <tr>
                <td><?php echo $p['id'];?></td>
                <td><?=$p['libelle']?></td>
                <td><?=$p['qtestock']?></td>
                <td><a onclick="return  confirm('Supprimer?')" class="btn btn-danger btn-sm" href="delete-produit.php?id=<?php echo $p['id'];?>">S</a></td>
            </tr>
<?php } ?>
        </tbody>
    </table>
</body>

</html>