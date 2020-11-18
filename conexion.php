  <?php 
$dbhost="";
    $dbuser="";
    $dbpass="";
    $dbname="";


    //conectamos la base de datos
	$conexion=mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
	mysqli_set_charset($conexion, 'utf8');


?>