/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt (numero1)

	let numero2;

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt (numero2)

	let resultado
	resultado = numero1+numero2;


	
	alert("el resultado es " + resultado);

	
}

