<?php 
//  $t=[1,2,-3,4,2,2,1,-7];
//  //methode 1 
//  foreach ($t as $i => $v) {// i=0,v=1,i=1,v=2
    
//     if ($t[$i]<0) {
//       $t[$i]*=-1; 
//     }
//  }
// echo  "methode 1 <br>";
// print_r($t);
// $t2=[1,-2,-3,2,1,-10,9];
// $copie_positive=[];
// //methode 2
// for ($i=0; $i <count($t2) ; $i++) { 
    
//     // if ($t2[$i]<0) {
//     //     $t2[$i]*=-1;// ou $t[$i]=$t[$i]* -1; 
//     // }
    
//     if ($t2[$i]<0) {
//        $copie_positive[]=$t2[$i]*-1;
//     }else{
//         $copie_positive[]=$t2[$i];

//     }
// }
// echo "<hr>";
// echo  "methode 2 <br>";
// print_r($t2);
// echo "<hr>";
// echo  "copie  positive  <br>";
// print_r($copie_positive);
// echo "<hr>";

//  //methode 3




?>

<?php 
// exercice 1 :
// question b : 
$b=[1,2,-3,4,2,2,2,1,-7,1] ;
foreach($b as $k=>$v){
    //premier essaie : combien on a de 1 dans ce tableau
    $n=0;
    $case=$v;
    for ($i=0; $i <count($b) ; $i++) { 
        if ($b[$i]==$case) { // a chaque fois une case du tableau = 1
            $n++;//incrementer par 1 
        }
        
    }
    echo "<h4>le nombre $case est repete $n fois</h4>";
}





?>