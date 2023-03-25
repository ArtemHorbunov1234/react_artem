function App() {
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

    return (
        <div className='App'>
            {people.map((person, index) => (
                <div className='person' key={index}>
                    <p>name : {person.name}</p>
                    <p>age : {person.age}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
