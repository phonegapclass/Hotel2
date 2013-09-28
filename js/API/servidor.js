//Servidor
function enviarRegistro(nombre,email,telefono){
	alert(nombre+email+telefono);
	$.ajax({
		type: "POST",
		url: "http://192.168.1.69/pgtest.php",
		data: "nom="+nombre+"&mai="+email+"&tel="+tel,
		error: function(){
			alert('Ajax error');	
		}
	}).done(function( msg ){
		alert( "Data Saved: " + msg );
	});
}