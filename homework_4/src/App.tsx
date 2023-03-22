import { useState } from 'react';

function OnChanges() {
    const [changes, setChanges] = useState(1);
    let a;
    if (changes === 1) {
        a = 'on';
    } else if (!changes) {
        a = 'off';
    } else {
        setChanges(0);
    }

    return (
        <div>
            <button onClick={() => setChanges(changes + 1)}>{a}</button>
        </div>
    );
}

type InputPassword = {
    type: 'text' | 'password';
};

function InvisiblePassword({ type }: InputPassword) {
    const [login, setLogin] = useState('text');
    const [password, setPassword] = useState('password');
    const [button, setButton] = useState(0);
    if (button === 0) {
        setLogin(type);
    } else if (button === 1) {
        setPassword(type);
    } else {
        setButton(0);
    }

    return (
        <div>
            <input type={type} />
            <button onClick={() => setButton(button + 1)}>SHOW</button>
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
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={inputValue}
            onChange={event => setValue(event.target.value)}
        />
    );
}

function Simple() {
    const [text, setText] = useState('');
    const [button, setButton] = useState(0);
    if (button) {
        setText('void');
    }

    return (
        <div>
            <form>
                <Input type='text' placeholder='Some text' inputValue={text} setValue={setText} />
                <div>{text}</div>
                <button onClick={() => setButton()}>SHOW</button>
            </form>
        </div>
    );
}

function App() {
    return (
        <div>
            <OnChanges />
            <Simple />
        </div>
    );
}

export default App;
