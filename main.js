'use strict'

function createNewUser() {
  let firstName = prompt('Ввведіть ім`я');
  let lastName = prompt('Ввведіть фамілію');
  let dateOfBirth = prompt('Введіть дату народження');
  const [day, month, year] = dateOfBirth.split('.').map(Number);
  const birthday = new Date(year, month - 1, day);

  const newUser = {
    firstName,
    lastName,
    birthday,
    getLogin() {
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    },
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthday.getFullYear();
    },
    getPassword() {
      return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.getFullYear();
    }
  }

  return newUser;
};

const user = createNewUser();
console.log(user.getLogin());
console.log(user.getAge());
console.log(user.getPassword());