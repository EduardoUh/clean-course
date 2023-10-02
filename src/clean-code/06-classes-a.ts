(() => {
    // Give more priority to composition over inheritance
    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;
        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public role: string;
        private lastAccess: Date
        constructor({ email, role }: UserProps) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenedFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenedFolder: string;
        constructor({ workingDirectory, lastOpenedFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenedFolder = lastOpenedFolder;
        }
    }

    // Composition here

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenedFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;
        constructor({ birthdate, email, gender, lastOpenedFolder, name, role, workingDirectory }: UserSettingsProps) {
            this.person = new Person({ birthdate, gender, name });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenedFolder, workingDirectory });
        }
    }


    // const eduardo = new Person({ name: 'Eduardo', gender: 'M', birthdate: new Date('2000-06-24') });
    const eduardoSettings = new UserSettings({ name: 'Eduardo', gender: 'M', birthdate: new Date('2000-06-24'), email: 'eduardo@gmail.com', role: 'ADMIN', workingDirectory: 'c:/users/eduardo/projects', lastOpenedFolder: 'RealState' });
    console.log(eduardoSettings);
})()