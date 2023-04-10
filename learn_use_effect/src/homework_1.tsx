import { useEffect, useState } from 'react';
export function Text() {
    const [text, setText] = useState('Artem');

    useEffect(() => {
        console.log(`${text}`);
    }, []);
    return <div>{text}</div>;
}
