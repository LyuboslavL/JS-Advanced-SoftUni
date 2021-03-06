class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = Number(age);
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

module.exports = Person;
let person = new Person('Anna', 'Simpson', 22, 'anna.simpson@abv.bg');
console.log(person.toString());