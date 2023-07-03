(() => {
	const arrayOfCelsius = [33.6, 12.34];

	const serverIp = "123.123.123.123";

	const accountUsers = [
		{ id: 1, email: "fernando@google.com" },
		{ id: 2, email: "juan@google.com" },
		{ id: 3, email: "melissa@google.com" },
	];

	const accountEmails = accountUsers.map((account) => account.email);

	// Variables booleanas de un video juego
	const canJump = false;
	const canRun = true;
	const hasItems = true;
	const isLoading = false;

	// Otros ejercicios
	const timeStart = new Date().getTime();
	//....
	// 3 doritos después
	//...
	const timeEnd = new Date().getTime() - timeStart;

	function getBooks() {
		throw new Error("Function not implemented.");
	}

	function getBooksByUrl(url: string) {
		throw new Error("Function not implemented.");
	}

	function calculateAreaSquare(side: number) {
		throw new Error("Function not implemented.");
	}

	function printJob() {
		throw new Error("Function not implemented.");
	}
})();
