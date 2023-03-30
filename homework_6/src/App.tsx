import { useState } from 'react';

function InputPushText() {
    const [name, setName] = useState('');
    const [save, setSave] = useState<string[]>([]);
    function inputPush() {
        setSave([name, ...save]);
        setName('');
    }

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => inputPush()}>Push</button>
            <p>
                {save.map((name, index) => (
                    <div key={index}>{name}</div>
                ))}
            </p>
        </div>
    );
}

function App() {
    return (
        <div className='App'>
            <InputPushText />
        </div>
    );
}

export default App;
