<?php 

try{
    if(!empty($_POST['name'])){
        $bdd = new PDO('mysql:host=localhost;dbname=test', 'root', '');
        $stmt = $bdd->prepare("INSERT INTO  nom (name) VALUES (:name)");
        $stmt->bindParam(':name', $_POST['name']);
        $stmt->execute();
        echo $_POST['name']." ajouté ave succès....";
    }else{
        echo "Impossible add name";
    }

}catch(Exception $e){
    print('Erreur:'.$e->getMessage());
}
