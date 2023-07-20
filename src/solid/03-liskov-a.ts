import {
	Audi,
	Honda,
	Nissan,
	Tesla,
	Toyota,
	VehicleRepository,
} from "./03-liskov-b";

interface Vehicle {
	name: string;
	car: VehicleRepository;
}

(() => {
	const printCarSeats = (cars: Vehicle[]) => {
		cars.forEach((car) => {
			console.log(car.name, car.car.getNumberOfSeats());
		});
	};

	const cars: Vehicle[] = [
		{
			name: "Tesla",
			car: new Tesla(7),
		},
		{
			name: "Audi",
			car: new Audi(7),
		},
		{
			name: "Toyota",
			car: new Toyota(5),
		},
		{
			name: "Honda",
			car: new Honda(5),
		},
		{
			name: "Nissan",
			car: new Nissan(4),
		},
	];

	printCarSeats(cars);
})();
