//Servidor
function enviarRegistro(nombre,email,telefono){
	alert(nombre+email+telefono);
	$.ajax({
		type: "POST",
		url: "http://www.igitsoft.com/pgtest.php",
		data: { nom: "John", mai: "Boston", tel: telefono },
		error: function(){
			alert('Ajax error');	
		}
	}).done(function( msg ){
		alert( "Data Saved: " + msg );
	});
}