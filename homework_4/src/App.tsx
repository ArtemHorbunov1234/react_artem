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

function InvisiblePassword() {
    const [isShown, setShown] = useState(false);

    return (
        <div>
            <input type={isShown ? 'text' : 'password'} />

            <button onClick={() => setShown(!isShown)}>Toggle</button>
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
            <InvisiblePassword />
        </div>
    );
}

export default App;
