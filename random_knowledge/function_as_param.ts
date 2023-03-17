function add(num1: number, num2: number) {
    return num1 + num2;
}

function sub(num1: number, num2: number) {
    return num1 - num2;
}

function mul(num1: number, num2: number) {
    return num1 * num2;
}

function square(num: number) {
    // console.log(num ** 2);
}

function doSomething(num1: number, num2: number, action: (a: number, b: number) => number) {
    const result = action(num1, num2);
    console.log(result);
}

doSomething(2, 3, add);
doSomething(4, 3, sub);
doSomething(2, 3, mul);
doSomething(2, 3, square);
