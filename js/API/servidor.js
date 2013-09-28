//Servidor
function enviarRegistro(nombre,email,telefono){
	alert(nombre+email+telefono);
	$.ajax({
		type: "POST",
		url: "some.php",
		data: { nom: "John", mai: "Boston", tel: telefono }
	}).done(function( msg ){
		alert( "Data Saved: " + msg );
	});
}