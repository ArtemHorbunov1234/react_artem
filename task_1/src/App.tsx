import { useState } from 'react';

function SumParties() {
    const [numA, setNumA] = useState(0);
    const [numB, setNumB] = useState(0);
    const c = numA + numB;
    return (
        <div>
            <p>
                {numA} + {numB} = {c}
            </p>
            <button onClick={() => setNumA(numA + 1)}>A</button>
            <button onClick={() => setNumB(numB + 1)}>B</button>
        </div>
    );
}

function LetterA() {
    const [text, setText] = useState('A');

    return (
        <div>
            <p>{text}</p>
            <button onClick={() => setText(text + 'A')}>324</button>
        </div>
    );
}

function InputDup() {
    const [text, setText] = useState('A');

    return (
        <div>
            <input type='text' value={text} onChange={e => setText(e.target.value)} />
            <p>{text}</p>
            <button onClick={() => setText(text + 'A')}>324</button>
        </div>
    );
}

function InputLog() {
    const [text, setText] = useState('A');
    function handleChange(newText: string) {
        console.log(`newText = ${newText}`);
        setText(newText);
        console.log(`text = ${text}`);
        if (newText.at(newText.length - 1) === '0') {
            setText('');
        }
    }
    text.at(text.length - 1);

    return (
        <div>
            <input type='text' value={text} onChange={e => handleChange(e.target.value)} />
        </div>
    );
}
0;

function App() {
    return (
        <div className='App'>
            <InputLog />
        </div>
    );
}

export default App;
