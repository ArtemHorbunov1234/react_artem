class Rectangle {
    readonly name: string;
    private _width: number;
    private _height: number;

    constructor(width: number, height: number, name: string) {
        this._width = width;
        this._height = height;
        this.name = name;
    }

    get area() {
        return this._width * this._height;
    }

    get width() {
        return this._width;
    }

    set width(value: number) {
        if (value < 0) {
            return;
        }
        this._width = value;
    }

    get data() {
        return [this._width, this._height, this.name];
    }

    printInfo() {
        console.log(`width: ${this._width}, height: ${this._height}`);
    }

    flipSides() {
        const tmp = this._width;
        this._width = this._height;
        this._height = tmp;
    }
}

function main() {
    const rectangle = new Rectangle(10, 9, 'Bob');
    rectangle.printInfo();
    rectangle.flipSides();
    rectangle.printInfo();

    console.log(rectangle.name);

    const [width, height, name] = rectangle.data;
    console.log(width, height, name);

    console.log(rectangle.width);
    rectangle.width = -5;
    console.log(rectangle.width);
    rectangle.width = 20;
    console.log(rectangle.width);
}

main();
