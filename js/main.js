function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];


	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";

}
translate();

function imprimirDatos(){
	var printEmail = document.getElementById('inputEmail').value;
	var printClave = document.getElementById("inputPassword").value;
	document.getElementById('correo').innerHTML = printEmail;
	document.getElementById('clave').innerHTML = printClave;
}