class Person {
    constructor(name = 'Anonymous', age=18) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello ${this.name}, Winter is coming!!!!`;
    }

    getDescription() {
        return `Hi, I am ${this.name}, My ${this.age}th name day is coming up :)`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            return `${description} , I majored in ${this.major}`;
        } else {
            return description;
        }
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            return `${greeting}, I'm visiting from ${this.homeLocation}`;
        } else {
            return greeting;
        }
    }
}

const p1 = new Traveller('Eddad Stark', 32, 'Neew York');
console.log(p1);
console.log(p1.getGreeting());
console.log(p1.getDescription());

const p2 = new Student();
console.log(p2);
console.log(p2.getGreeting());
console.log(p2.getDescription());

