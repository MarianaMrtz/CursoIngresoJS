/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()

{
	
	let nombre;

	nombre = prompt("ingrese un dato")

	nombre = document.getElementById("prompt").value;
	
    // mostrar por alert
   
	alert(nombre);
}

