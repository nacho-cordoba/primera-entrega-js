// Homebanking

let usuario = 'ignaciocordoba';
let contraseña = 'coderhouse';
login = true;

/* Ciclo para validar ingreso de datos */

do {
	let ingresoUsuario = prompt('Ingrese su nombre de usuario');
	let ingresoContraseña = prompt('Ingrese su contraseña');
	if (usuario === ingresoUsuario && contraseña === ingresoContraseña) {
		alert('Bienvenido');
		login = false;
	} else {
		alert('Usuario y/o contraseña incorrectos. Intente nuevamente');
	}
} while (login);

/* Función con condicional y switch dentro - Simulador de plazo fijo */

function inversion() {
	let pregunta = confirm('¿Desea simular un plazo fijo?');
	if (pregunta) {
		alert('Le informamos que la TNA (Tasa Nominal Anual) es del 133,00%');
		let monto = parseInt(prompt('Ingrese el monto a invertir'));
		let plazo = parseInt(prompt('Seleccione a cuantos días desea realizar su inversión: \n30 \n60 \n90 '));
		let intereses = (monto * (133 / 12)) / 100;
		switch (plazo) {
			case 30:
				alert('Su ganancia es ' + intereses);
				alert('Su monto total a recibir es ' + (monto + intereses));
				break;
			case 60:
				alert('Su ganancia es ' + intereses * 2);
				alert('Su monto total a recibir es ' + (monto + intereses * 2));
				break;
			case 90:
				alert('Su ganancia es ' + intereses * 3);
				alert('Su monto total a recibir es ' + (monto + intereses * 3));
				break;
			default:
				alert('Error: ingrese una opción válida');
				inversion();
		}
	} else {
		alert('Hasta luego');
	}
}

inversion();
