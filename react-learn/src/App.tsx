import { useState } from 'react';
type Person = {
    name: string;
    age: number;
};
function InfoInput() {
    const [name, setName] = useState('');
    const [age, setAge] = useState<number | ''>('');
    const [people, setPeople] = useState<Person[]>([]);

    function handelClick() {
        if (age === '') {
            return;
        }
        const person = {
            name: name,
            age: age,
        };

        setPeople([person, ...people]);
    }
    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <input type='number' value={age} onChange={e => setAge(Number(e.target.value))} />
            <button onClick={() => handelClick()}>Push</button>
            {people.map((person, index) => (
                <div key={index}>
                    {person.name} {person.age}
                </div>
            ))}
        </div>
    );
}

function App() {
    return (
        <div className='App'>
            <InfoInput />
        </div>
    );
}

export default App;
