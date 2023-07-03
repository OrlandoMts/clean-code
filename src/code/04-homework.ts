(() => {
	const redFruits = ["manzana", "cereza", "ciruela"];

	function isRedFruit(fruit: string): boolean {
		return redFruits.includes(fruit) ? true : false;
	}

	type FruitColor = "red" | "yellow" | "purple";
	function getFruitsByColorRefactor(color: FruitColor): string[] {
		const fruitsByColor = {
			red: ["manzana", "fresa"],
			yellow: ["piña", "banana"],
			purple: ["moras", "uvas"],
		};

		if (!Object.keys(fruitsByColor).includes(color)) {
			throw Error("the color must be: red, yellow, purple");
		}
		return fruitsByColor[color];
	}

	function getFruitsByColor(color: string): string[] {
		if (color !== "red" && color !== "yellow" && color !== "purple") {
			throw Error("the color must be: red, yellow, purple");
		}
		return color === "red"
			? ["manzana", "fresa"]
			: color === "yellow"
			? ["piña", "banana"]
			: color === "purple"
			? ["moras", "uvas"]
			: [];
	}

	// Simplificar esta función
	let isFirstStepWorking = true;
	let isSecondStepWorking = true;
	let isThirdStepWorking = true;
	let isFourthStepWorking = true;

	function workingSteps(): string {
		if (!isFirstStepWorking) return "First step broken";
		if (!isSecondStepWorking) return "Second step broken";
		if (!isThirdStepWorking) return "Third step broken";
		if (!isFourthStepWorking) return "Fourth step broken";
		return "Working properly";
	}

	// isRedFruit
	console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
	console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

	//getFruitsByColor
	console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
	console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
	console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
	// console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

	// workingSteps
	console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
