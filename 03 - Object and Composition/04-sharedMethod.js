function sharedMethod() {
    let person1 = {
        firstName: 'Denzel',
        lastName: 'Washington',
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    console.log(person1.fullName());

    let person2 = {
        firstName: 'Brad',
        lastName: 'Pitt'
    }

    const fullName = person1.fullName;
    person2.fullName = fullName;
    console.log(person2.fullName());
}

// sharedMethod();