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

function InputRegistration() {
    const [inputLog, setInputLog] = useState('');
    const [inputPas, setInputPas] = useState('');
    const [passCheck, setPassCheck] = useState('');
    const [passHide, setPassHide] = useState(false);
    const [checkHide, setCheckHide] = useState(false);

    function inputCheck() {
        if (inputPas === passCheck && inputPas.length >= 8) {
            console.log(`Login = ${inputLog}`);
            console.log(`Password = ${inputPas}`);
        } else if (inputPas !== passCheck && inputPas.length >= 8) {
            alert('Passwords do not match');
        } else {
            alert('password must be more than 8 characters long');
        }
    }

    return (
        <div className='registration'>
            <p>login</p>
            <input type='text' value={inputLog} onChange={e => setInputLog(e.target.value)} />
            <p>Password</p>
            <input
                type={!checkHide ? 'password' : 'text'}
                value={inputPas}
                onChange={e => setInputPas(e.target.value)}
            />
            <button onClick={() => setCheckHide(!checkHide)}>Check</button>
            <p>Repeat Password</p>
            <input
                type={!passHide ? 'password' : 'text'}
                value={passCheck}
                onChange={e => setPassCheck(e.target.value)}
            />
            <button onClick={() => setPassHide(!passHide)}>Check</button>
            <div>
                <button className='btn--push' onClick={() => inputCheck()}>
                    Registration
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className='App'>
            <InputRegistration />
        </div>
    );
}

export default App;
