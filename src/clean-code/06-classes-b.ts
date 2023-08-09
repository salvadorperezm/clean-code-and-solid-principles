// In this example, we are not applying the Single Responsibility Principle
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
    birthday: Date;
    gender: Gender;
    name: string;
    email: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public role: string;

    constructor({ birthday, gender, name, email, role }: UserProperties) {
      super({ birthday, gender, name });
      this.email = email;
      this.role = role;
    }

    public checkCredentials() {
      return true;
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
  class UserSettings extends User {
    public lastOpenedDirectory: string;
    public workingDirectory: string;

    constructor({
      birthday,
      gender,
      name,
      email,
      role,
      lastOpenedDirectory,
      workingDirectory,
    }: UserSettingsProperties) {
      super({ birthday, gender, name, email, role });
      this.lastOpenedDirectory = lastOpenedDirectory;
      this.workingDirectory = workingDirectory;
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
