(() => {
	// No aplicando el principio de responsabilidad Única
	type Gender = "M" | "F";

	class Person {
		constructor(
			public name: string,
			public gender: Gender,
			public birthDate: Date
		) {}
	}

	class User extends Person {
		public lastAccess: Date;

		constructor(
			public email: string,
			public role: string,
			name: string,
			gender: Gender,
			birthDate: Date
		) {
			super(name, gender, birthDate);
			this.lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	class UserSettings extends User {
		constructor(
			public workingDirectory: string,
			public lastOpenFolder: string,
			email: string,
			role: string,
			name: string,
			gender: Gender,
			birthDate: Date
		) {
			super(email, role, name, gender, birthDate);
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	const newPerson = new Person("Orlando", "M", new Date("1997-11-19"));

	const userSettings = new UserSettings(
		"/usr/home",
		"/home",
		"omontes@indelpro",
		"admin",
		"orlando",
		"F",
		new Date("1997-11-19")
	);
	console.log(userSettings);

	console.log(newPerson);
})();
