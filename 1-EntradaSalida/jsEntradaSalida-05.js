/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;

	nombre = document.getElementById("txtIdNombre").value;

	let edad;

	edad = document.getElementById("txtIdEdad").value;

	
	alert("usted se llama "  +nombre+ " y su edad es "  +edad);

	

	

}

