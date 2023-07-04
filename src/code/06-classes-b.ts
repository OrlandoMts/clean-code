(() => {
	// No aplicando el principio de responsabilidad Única
	type Gender = "M" | "F";

	interface PersonProps {
		birthDate: Date;
		gender: Gender;
		name: string;
	}

	class Person {
		public birthDate: Date;
		public gender: Gender;
		public name: string;

		constructor({ name, gender, birthDate }: PersonProps) {
			this.birthDate = birthDate;
			this.gender = gender;
			this.name = name;
		}
	}

	interface UserProps extends PersonProps {
		email: string;
		role: string;
	}

	class User extends Person {
		public email: string;
		public lastAccess: Date;
		public role: string;

		constructor({ email, role, name, gender, birthDate }: UserProps) {
			super({ name, gender, birthDate });
			this.email = email;
			this.lastAccess = new Date();
			this.role = role;
		}

		checkCredentials() {
			return true;
		}
	}

	interface UserSettingsProps extends UserProps {
		workingDirectory: string;
		lastOpenFolder: string;
	}

	class UserSettings extends User {
		public workingDirectory: string;
		public lastOpenFolder: string;

		constructor({
			birthDate,
			email,
			gender,
			lastOpenFolder,
			name,
			role,
			workingDirectory,
		}: UserSettingsProps) {
			super({ email, role, name, gender, birthDate });
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	const userSettings = new UserSettings({
		birthDate: new Date("1997-11-19"),
		email: "omontes@indelpro.com",
		gender: "M",
		lastOpenFolder: "/home",
		name: "Orlando Montes",
		role: "Admin",
		workingDirectory: "/usr/home",
	});
	console.log(userSettings);
})();
