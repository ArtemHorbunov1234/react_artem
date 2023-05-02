class Person {
    name: string;
    private readonly lastName: string;
    age: number;
    private readonly number: number;

    constructor(name: string, lastName: string, age: number, number: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.number = number;
    }

    printInfo() {
        console.log(`name: ${this.name}, lastName: ${this.lastName}, age: ${this.age}, number: ${this.number}`);
    }

    checkCode(number: number) {
        if (number === this.number && this.age > 0 && this.age <= 100 && this.name.length > 0) {
            return true;
        } else {
            return false;
        }
    }
}
const rectangle = new Person('Artem', 'Horbunov', 23, 5);
rectangle.age = 75;
rectangle.printInfo();
const rectangle1 = new Person('Artem', 'Horbunov', 1, 7);
console.log(rectangle1.checkCode(7));
