import { useState } from 'react';

function HideShowSquare() {
    const [hidden, setHidden] = useState(true);

    return (
        <div>
            {!hidden ? <div>SQUARE</div> : null}
            <div>
                <button onClick={() => setHidden(true)}>HIDE</button>
                <button onClick={() => setHidden(false)}>SHOW</button>
            </div>
        </div>
    );
}

type InputProps = {
    type: 'text' | 'password';
    placeholder: string;
    inputValue: string;
    setValue: (value: string) => void;
};

function Input({ type, placeholder, inputValue, setValue }: InputProps) {
    // function handleInputUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    //     setValue(event.target.value);
    // }

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={inputValue}
            onChange={event => setValue(event.target.value)}
        />
    );
}

function Form() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        console.log(`Login: ${login}\nPassword: ${password}`);
    }

    function checkPassword() {
        return password.length >= 8;
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <Input type='text' placeholder='Your login' inputValue={login} setValue={setLogin} />
            <br />
            <Input type='password' placeholder='Your password' inputValue={password} setValue={setPassword} />
            <div>{checkPassword() ? 'Password is good' : 'Password is to short'}</div>
            <button>Submit</button>
        </form>
    );
}

function Simple() {
    const [text, setText] = useState('');

    return (
        <div>
            <Input type='text' placeholder='Some text' inputValue={text} setValue={setText} />
            <div>{text}</div>
        </div>
    );
}

function Array() {
    const [numbers, setNumbers] = useState<number[]>([]);

    return (
        <div>
            <div>{JSON.stringify(numbers)}</div>
            <button onClick={() => setNumbers([...numbers, numbers.length])}>Click</button>
        </div>
    );
}

type Person = {
    name: string;
    age: number;
    sex: 'male' | 'female';
};

function Object() {
    const [person, setPerson] = useState<Person>({
        name: 'Artem',
        age: 21,
        sex: 'male',
    });

    function getNewAgeValue(newAgeString: string) {
        const newAge = Number(newAgeString);
        if (isNaN(newAge)) {
            return person.age;
        }
        return newAge;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px', gap: '10px' }}>
            <label>
                Name
                <input
                    type='text'
                    value={person.name}
                    onChange={event =>
                        setPerson({
                            ...person,
                            name: event.target.value,
                        })
                    }
                />
            </label>
            <label>
                Age
                <input
                    type='text'
                    value={person.age}
                    onChange={event =>
                        setPerson({
                            ...person,
                            age: getNewAgeValue(event.target.value),
                        })
                    }
                />
            </label>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '200px',
                    gap: '10px',
                    border: 'solid 1px black',
                    padding: '1rem',
                }}
            >
                <div>{person.name}</div>
                <div>{person.age}</div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Array />
            <Object />
        </div>
    );
}

export default App;
