import { useState } from 'react';
function InputPushText() {
    const [names, setName] = useState<string[]>([]);
    const [save, setSave] = useState<string[]>([]);
    function inputPush() {
        setSave([...names, ...save]);
        setName(['']);
    }

    return (
        <div>
            <input type='text' value={names} onChange={e => setName([e.target.value])} />
            <button onClick={() => inputPush()}>Push</button>
            {save}
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
