class Person {
    name: string;
    private readonly lastName: string;
    age: number;
    private readonly number: number;

    constructor(name: string, lastName: string, age: number, number: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.number = 5;
    }

    checkCode(number: number) {
        if (number === this.number) {
            return true;
        } else {
            return false;
        }
    }

    printInfo() {
        console.log(`name: ${this.name}, lastName: ${this.lastName}, age: ${this.age}, number: ${this.number}`);
    }

    checkInfo() {
        if (this.age > 0 && this.age <= 100 && this.name.length > 0) {
            console.log(`name: ${this.name}, lastName: ${this.lastName}, age: ${this.age}, number: ${this.number}`);
        }
    }
}
const rectangle = new Person('Artem', 'Horbunov', 23, 5);
rectangle.printInfo();
const rectangle1 = new Person('Artem', 'Horbunov', 23, 6);
rectangle1.age = 75;
rectangle1.checkInfo();

console.log(rectangle1.checkCode(5));
