const people = [
    {
        name: 'Anna',
        age: 18,
    },
    {
        name: 'Sasha',
        age: 21,
    },
    {
        name: 'Yev',
        age: 22,
    },
    {
        name: 'Natasha',
        age: 19,
    },
];

const identity = people.map((person, index) => (
    <div className='person' key={index}>
        <p>name : {person.name}</p>
        <p>age : {person.age}</p>
    </div>
));

const numbers = [
    {
        a: 12,
        b: 23,
    },
    {
        a: 34,
        b: 2,
    },
    {
        a: 15,
        b: 27,
    },
];

const namePeople = [
    {
        name: 'Anna',
    },
    {
        name: 'Sasha',
    },
    {
        name: 'Yev',
    },
    {
        name: 'Natasha',
    },
];

const sumNumber = numbers.map(num => num.a + num.b);
console.log(sumNumber);

// const bigName = namePeople.toUpperCase();
console.log(sumNumber);
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(number: number) {
    for (let i = 2; number > i; i++) {
        console.log(number);
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

function App() {
    return <div className='App'>{sumNumber}</div>;
}

export default App;
