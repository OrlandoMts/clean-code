class MiClase {
	static x = 10;
	static y = 10;

	static imprimirX() {
		console.log(`El valor de x es: ${this.x}`);
	}

	public imprimirY() {
		console.log(`El valor de y es: ${MiClase.y}`);
	}
}

const miclase = new MiClase();
miclase.imprimirY();

// Siempre que se quiera acceder a una propiedad static, se debe hacer referencia a la clase.
// No se pueden acceder desde una instancia de la clase.
