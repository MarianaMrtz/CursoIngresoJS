/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo ;
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	dividendo = parseInt (dividendo)

	let divisor;

	divisor = document.getElementById("txtIdNumeroDivisor").value;
	divisor = parseInt (divisor)

	let resto
	resto = dividendo%divisor


	
	alert("el resto es " + resto);
}
