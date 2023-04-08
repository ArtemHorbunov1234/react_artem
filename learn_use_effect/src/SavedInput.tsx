import { useEffect, useState } from 'react';

const INPUT_KEY = 'input_key';

export function SavedInput() {
    const [value, setValue] = useState(localStorage.getItem(INPUT_KEY) ?? '');

    useEffect(() => {
        localStorage.setItem(INPUT_KEY, value);
    }, [value]);

    return <input type='text' value={value} onChange={e => setValue(e.target.value)} />;
}
