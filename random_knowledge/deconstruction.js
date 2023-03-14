const person = {
    name: 'Artem',
    age: 13,
};

const { name, age } = person;

if (age >= 18) {
    console.log('Good');
} else {
    console.log('Bad');
}

function test() {
    function callMe() {
        console.log('I am calling you');
    }

    return ['Artem', callMe];
}

const [someone, callThePerson] = test();

callThePerson();
