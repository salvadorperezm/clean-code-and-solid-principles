// In this example, we are not applying the Single Responsibility Principle
(() => {
  type Gender = "M" | "F";

  class Person {
    constructor(
      public birthday: Date,
      public gender: Gender,
      public name: string
    ) {
      this.birthday = birthday;
      this.gender = gender;
      this.name = name;
    }
  }

  class User extends Person {
    constructor(
      birthday: Date,
      gender: Gender,
      name: string,
      public email: string,
      public role: string
    ) {
      super(birthday, gender, name);
    }

    public checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      birthday: Date,
      email: string,
      gender: Gender,
      name: string,
      public lastOpenedDirectory: string,
      public workingDirectory: string,
      role: string
    ) {
      super(birthday, gender, name, email, role);
    }
  }

  const newPerson = new Person(new Date("1999-10-26"), "M", "Salvador");
  console.log({ newPerson });

  const newUserSettings = new UserSettings(
    new Date("1999-10-26"),
    "salvador@mail.com",
    "M",
    "Salvador",
    "dir/home/",
    "learning/clean-code",
    "developer"
  );
  console.log({ newUserSettings });
})();
