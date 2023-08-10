// In this example, we are not applying the Single Responsibility Principle
// Prioritizing composition over inheritance

(() => {
  type Gender = "M" | "F";

  interface PersonProperties {
    birthday: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthday: Date;
    public gender: Gender;
    public name: string;

    constructor({ birthday, gender, name }: PersonProperties) {
      this.birthday = birthday;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProperties {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public role: string;

    constructor({ email, role }: UserProperties) {
      this.email = email;
      this.role = role;
    }

    public checkCredentials() {
      return true;
    }
  }

  interface SettingsProperties {
    lastOpenedDirectory: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenedDirectory: string;
    public workingDirectory: string;

    constructor({ lastOpenedDirectory, workingDirectory }: SettingsProperties) {
      this.lastOpenedDirectory = lastOpenedDirectory;
      this.workingDirectory = workingDirectory;
    }
  }

  interface UserSettingsProperties {
    birthday: Date;
    gender: Gender;
    name: string;
    email: string;
    role: string;
    lastOpenedDirectory: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthday,
      email,
      role,
      lastOpenedDirectory,
      workingDirectory,
    }: UserSettingsProperties) {
      this.person = new Person({ birthday, gender, name });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenedDirectory, workingDirectory });
    }
  }

  const newPerson = new Person({
    birthday: new Date("1999-10-26"),
    gender: "M",
    name: "Salvador",
  });
  console.log({ newPerson });

  const newUserSettings = new UserSettings({
    birthday: new Date("1999-10-26"),
    gender: "M",
    name: "Salvador",
    lastOpenedDirectory: "dir/home/",
    workingDirectory: "learning/clean-code",
    role: "developer",
    email: "salvador@mail.com",
  });
  console.log({ newUserSettings });
})();
