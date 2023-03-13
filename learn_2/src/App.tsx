type Person = {
    name: string;
    age: number;
};

type PersonDisplayProps = {
    person: Person;
};

function PersonDisplay({ person }: PersonDisplayProps) {
    const { name, age } = person;
    return (
        <div>
            <div>{name}</div>
            <AgeType age={age} />
        </div>
    );
}

type AgeTypeProps = {
    age: number;
};

function AgeType({ age }: AgeTypeProps) {
    if (age < 18) {
        return <div>UNDERAGE</div>;
    }

    return <div>OK</div>;
}

const artem = {
    name: 'Artem',
    age: 13,
};
const vika = {
    name: 'Vika',
    age: 42,
};

function App() {
    return (
        <div>
            <PersonDisplay person={artem} />
            <PersonDisplay person={vika} />
        </div>
    );
}

export default App;
