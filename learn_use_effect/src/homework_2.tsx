import { useEffect, useState } from 'react';

export function TextPushConsole() {
    const [text, setText] = useState('');
    useEffect(() => {
        console.log(`${text}`);
    }, [text]);
    return (
        <div>
            <input type='text' value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => setText(text)}>Artem</button>
        </div>
    );
}
