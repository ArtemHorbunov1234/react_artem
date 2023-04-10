import { useEffect, useState } from 'react';
const INPUT_KEY_NAME = 'INPUT_KEY';
const INPUT_KEY_SURNAME = 'INPUT_KEY';

export function InputText() {
    const [name, setName] = useState(localStorage.getItem(INPUT_KEY_NAME) ?? '');
    const [surname, setSurname] = useState(localStorage.getItem(INPUT_KEY_SURNAME) ?? '');
    useEffect(() => {
        localStorage.setItem(INPUT_KEY_NAME, name);
        localStorage.setItem(INPUT_KEY_SURNAME, surname);
    }, [name, surname]);
    // type Myobject = {
    //     name: string;
    //     surname: string;
    // };
    // const myObject: Myobject = {
    //     name: name,
    //     surname: surname,
    // };
    const myObject = {
        name: name,
        surname: surname,
    };
    function pushButton() {
        console.log(myObject);
    }

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <input type='text' value={surname} onChange={e => setSurname(e.target.value)} />
            <button onClick={() => pushButton()}>234324</button>
        </div>
    );
}
