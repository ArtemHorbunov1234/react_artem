import { useState } from 'react';

function InputText() {
    const [text, setText] = useState('');
    return (
        <div>
            <input type='text' value={text} onChange={e => setText(e.target.value)} />
            <p>{text}</p>
            <button onClick={() => setText('')}>reset</button>
        </div>
    );
}

function InputOutput() {
    const [inputLog, setInputLog] = useState('');
    const [inputPas, setInputPas] = useState('');
    function inputConsol() {
        console.log(`login : ${inputLog}`);
        console.log(`Password : ${inputPas}`);
    }
    return (
        <div className='flex'>
            <p>login</p>
            <input type='text' value={inputLog} onChange={e => setInputLog(e.target.value)} />
            <p>Password</p>
            <input type='password' value={inputPas} onChange={e => setInputPas(e.target.value)} />
            <button onClick={() => inputConsol()}>Consol.Log</button>
        </div>
    );
}

function InputAlert() {
    const [inputLog, setInputLog] = useState('');
    const [inputPas, setInputPas] = useState('');
    function inputCheck() {
        if (inputLog === inputPas) {
            console.log(`Password = ${inputLog}`);
        } else {
            alert('Error');
        }
    }
    return (
        <div>
            <p>login</p>
            <input type='password' value={inputLog} onChange={e => setInputLog(e.target.value)} />
            <p>Password</p>
            <input type='password' value={inputPas} onChange={e => setInputPas(e.target.value)} />
            <button onClick={() => inputCheck()}>Check</button>
        </div>
    );
}

function App() {
    return (
        <div className='App'>
            <InputAlert />
        </div>
    );
}

export default App;
