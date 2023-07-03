(() => {
	interface Movie {
		cast: string[];
		description: string;
		rating: number;
		title: string;
	}

	function getMovieById(id: string) {
		console.log({ id });
	}

	function getMovieCastById(id: string) {
		console.log({ id });
	}

	function getActorBioById(id: string) {
		console.log({ id });
	}

	function createMovie({ title, description, rating, cast }: Movie) {
		console.log({ title, description, rating, cast });
	}

	function createActor(fullName: string, birthdate: Date): boolean {
		// tarea asincrona para verificar nombre
		// ..
		// ..
		if (fullName === "fernando") return false;

		console.log("Crear actor");
		return true;
	}

	// Ejercicio extra
	const getPayAmount = ({
		isDead = false,
		isSeparated = true,
		isRetired = false,
	}): number => {
		if (isDead) return 1500;
		if (isSeparated) return 2500;
		if (isRetired) return 3000;
		return 4000;
		// return isDead ? 1500 : isSeparated ? 2500 : isRetired ? 3000 : 4000;
	};
})();
