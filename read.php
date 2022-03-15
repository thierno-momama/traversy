<?php 

$bdd = new PDO('mysql:host=localhost;dbname=test', 'root', '');
$sth = $bdd->query("SELECT name FROM nom");
$rows = $sth->fetchAll();
echo json_encode($rows);
