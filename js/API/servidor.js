//Servidor
function enviarRegistro(nombre,email,telefono){
	alert(nombre+email+telefono);
	$.ajax({
		type: "POST",
		url: "http://www.igitsoft.com/pgtest.php",
		data: "nom="+nombre+"&mai="+email+"&tel="+telefono,
		error: function(){
			alert('Ajax error');
		}
	}).done(function( msg ){
		alert( "Data Saved: " + msg );
	});
}