type ProfileCardProps = {
    name: string;
    age: number;
    text: string;
};

function ProfileCard(props: ProfileCardProps) {
    return (
        <div className='profilcard'>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Infa: {props.text}</p>
        </div>
    );
}

type ProfileCardWithObjectProps = {
    person: {
        name: string;
        age: number;
        text: string;
    };
};

function ProfileCardWithObject(props: ProfileCardWithObjectProps) {
    return (
        <div className='profilcard'>
            <p>Name: {props.person.name}</p>
            <p>Age: {props.person.age}</p>
            <p>Infa: {props.person.text}</p>
        </div>
    );
}

type Number = {
    num1: number;
    num2: number;
};

function Sum(props: Number) {
    return (
        <div className='profilcard'>
            <p>Sum: {props.num1 + props.num2}</p>
        </div>
    );
}

function App() {
    const person = {
        name: 'Boba',
        age: 28,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum error necessitatibus officia facilis esse eveniet porro at dolor! Dolor odio quos temporibus minima dolorem quod sint similique distinctio odit.',
    };

    return (
        <div className='App'>
            <ProfileCard
                name='Artem'
                age={20}
                text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum error necessitatibus officia facilis esse eveniet porro at dolor! Dolor odio quos temporibus minima dolorem quod sint similique distinctio odit.'
            />
            <ProfileCard
                name='Igor'
                age={24}
                text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum error necessitatibus officia facilis esse eveniet porro at dolor! Dolor odio quos temporibus minima dolorem quod sint similique distinctio odit.'
            />
            <ProfileCardWithObject person={person} />
            <div>
                <Sum num1={1} num2={3} />
            </div>
        </div>
    );
}

export default App;
