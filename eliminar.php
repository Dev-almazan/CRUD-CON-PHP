

<html>
<?php

include('conexion.php');

      
 
$id = $_GET["id"];
$query = "delete from contacto where id = '$id' "; 
$result = mysqli_query($conexion,$query); 
        
        
        
if ($query){
    
    echo("
    <script>
  history.go(-1);
    </script>
    
    
    ");

}
        
    
   else {
      echo "<script>
    alert('Error al eliminar dato, favor de contactar al Administrador del Sistema ');
      history.go(-1);
    </script>";
    
}
?>
    </html>