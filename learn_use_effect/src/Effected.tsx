import { useEffect, useState } from 'react';

export function Effected() {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);

    useEffect(() => {
        console.log(`${value} ${value2}`);
    }, []);

    return (
        <div>
            <button onClick={() => setValue(value + 1)}>{value}</button>
            <button onClick={() => setValue2(value2 + 1)}>{value2}</button>
            <button onClick={() => setValue3(value3 + 1)}>{value3}</button>
        </div>
    );
}
