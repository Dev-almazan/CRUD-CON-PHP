<?php
	
	include ("conexion.php");

	$consulta = "SELECT * FROM contacto";
	$registro = mysqli_query($conexion,$consulta);
	
	$tabla = "";
	
	while($row = mysqli_fetch_array($registro)){		
        $eliminar = '<a href=\"eliminar.php?id='.$row['id'].'\" onclick=\"return confirm(\'¿Seguro que desea eliminiar este usuario?\')\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Eliminar\" class=\"btn btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>';
        
		$tabla.='{
                "id":"'.$row['id'].'",
				  "nombre":"'.$row['nombre'].'",
				  "apellido":"'.$row['apellido'].'",
                   "correo":"'.$row['correo'].'",
                    "telefono":"'.$row['telefono'].'",
                     "mensaje":"'.$row['mensaje'].'",
                     "eliminar":"'.$eliminar.'"
				},';		
	}	

	//eliminamos la coma que sobra
	$tabla = substr($tabla,0, strlen($tabla) - 1);

	echo '{"data":['.$tabla.']}';	

?>