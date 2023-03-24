const numbers = [4, 5, 6, 10];

const newNumbers = [];
for (const number of numbers) {
    newNumbers.push(number * 2);
}

console.log(newNumbers);

// -----------------------------------------------------------

const doubleNumber = num => num * 2;

function doubleNumberFun(num) {
    return num * 2;
}

const add = (a, b) => a + b;

function addFun(a, b) {
    return a + b;
}

// f(x) = x * 4
// y = f(5) = 5 * 4 = 20

const mappedNumbers = numbers.map(num => num * 2);

console.log(mappedNumbers);

// -----------------------------------------------------------

const people = [
    {
        name: 'Artem',
        age: 21,
    },
    {
        name: 'Ira',
        age: 21,
    },
    {
        name: 'Egor',
        age: 14,
    },
    {
        name: 'Vika',
        age: 42,
    },
];

console.log(people);

const ageList = [];
for (const person of people) {
    ageList.push(person.age);
}

const person = {
    name: 'Artem',
    age: 21,
};

function getAgeFun(person) {
    return person.age;
}

const getAge = person => person.age;

const ageMapped = people.map(person => person.age);

console.log(ageMapped);

// -----------------------------------------------------------

const numbers2 = [4, 5, 6, 10];

const newNumbers2 = [];
for (let i = 0; i < numbers2.length; i++) {
    const number = numbers2[i];
    newNumbers2.push(number + i);
}

console.log(newNumbers2);

const add2 = (a, b) => a + b;

const numbers2Mapped = numbers2.map((num, index) => {
    return num + index;
});

console.log(numbers2Mapped);

const abc = [];
for (let i = 0; i < numbers2.length; i++) {
    const number = numbers2[i];
    const obj = {
        num: number,
        index: i,
    };
    abc.push(obj);
}

const numberToObjectMapped = numbers2.map((num, index) => {
    const obj = {
        num: num,
        index: index,
    };
    return obj;
});

console.log(numberToObjectMapped);

// [9, 22, 13]

// [
//     {
//         num: 9,
//         index: 0
//     },
//     {
//         num: 22,
//         index: 1
//     },
//     {
//         num: 13,
//         index: 2
//     },
// ]
