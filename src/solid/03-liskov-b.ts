export interface VehicleRepository {
	getNumberOfSeats: () => number;
}

export class Tesla implements VehicleRepository {
	constructor(private numberOfSeats: number) {}

	getNumberOfSeats() {
		return this.numberOfSeats;
	}
}

export class Audi implements VehicleRepository {
	constructor(private numberOfSeats: number) {}

	getNumberOfSeats() {
		return this.numberOfSeats;
	}
}

export class Toyota implements VehicleRepository {
	constructor(private numberOfSeats: number) {}

	getNumberOfSeats() {
		return this.numberOfSeats;
	}
}

export class Honda implements VehicleRepository {
	constructor(private numberOfSeats: number) {}

	getNumberOfSeats() {
		return this.numberOfSeats;
	}
}

export class Nissan implements VehicleRepository {
	constructor(private numberOfSeats: number) {}

	getNumberOfSeats() {
		return this.numberOfSeats;
	}
}
