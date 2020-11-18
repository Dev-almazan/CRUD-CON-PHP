
//las variables las conectamos con minusculas como viene creada en la base de datos que sincronicen con el archivo de php
$(document).ready(function() {			   
	$('#tablas').DataTable( {
		"sPaginationType": "full_numbers",
           "order": [[ 0, "desc" ]],
		"ajax": {
			"url": "postdata.php",
        	"type": "POST"
		},		
        
		"columns": [
            { "data": "id",visible: false },
			{ "data": "nombre" },
			{ "data": "apellido" },
            { "data": "correo" },
            { "data": "telefono" },
			{ "data": "mensaje" },
              { "data": "eliminar" }
			],
		"oLanguage": {
            "sProcessing":     "Procesando...",
		    "sLengthMenu": 'Mostrar <select>'+
		        '<option value="10">10</option>'+
		        '<option value="20">20</option>'+
		        '<option value="30">30</option>'+
		        '<option value="40">40</option>'+
		        '<option value="50">50</option>'+
		        '<option value="-1">All</option>'+
		        '</select> registros',
    
		    "sZeroRecords":    "No se encontraron resultados",
		    "sEmptyTable":     "Ningún dato disponible en esta tabla",
		    "sInfo":           "Mostrando del (_START_ al _END_) de un total de _TOTAL_ registros",
		    "sInfoEmpty":      "Mostrando del 0 al 0 de un total de 0 registros",
		    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
		    "sInfoPostFix":    "",
		    "sSearch":         "BUSCAR",
		    "sUrl":            "",
		    "sInfoThousands":  ",",
		    "sLoadingRecords": "Por favor espere - cargando...",
		    "oPaginate": {
		        "sFirst":    "Primero",
		        "sLast":     "Último",
		        "sNext":     "Siguiente",
		        "sPrevious": "Anterior"
		    },
		    "oAria": {
		        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                   "sSortDescending": ": Activar para ordenar la columna de manera descendente"
		    }
        }
	});
});