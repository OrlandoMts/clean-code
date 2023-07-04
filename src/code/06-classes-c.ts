(() => {
	// Aplicando el principio de responsabilidad Única
	// Priorizar la composición frente a la herencia
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

	interface UserProps {
		email: string;
		role: string;
	}

	class User {
		public email: string;
		public lastAccess: Date;
		public role: string;

		constructor({ email, role }: UserProps) {
			this.email = email;
			this.lastAccess = new Date();
			this.role = role;
		}

		checkCredentials() {
			return true;
		}
	}

	interface SettingsProps {
		workingDirectory: string;
		lastOpenFolder: string;
	}

	class Settings {
		public workingDirectory: string;
		public lastOpenFolder: string;

		constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	interface UserSettingsProps {
		birthDate: Date;
		gender: Gender;
		name: string;
		email: string;
		role: string;
		workingDirectory: string;
		lastOpenFolder: string;
	}

	class UserSettings {
		public person: Person;
		public user: User;
		public settings: Settings;

		constructor({
			name,
			gender,
			birthDate,
			email,
			role,
			workingDirectory,
			lastOpenFolder,
		}: UserSettingsProps) {
			this.person = new Person({ name, gender, birthDate });
			this.user = new User({ email, role });
			this.settings = new Settings({ workingDirectory, lastOpenFolder });
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
