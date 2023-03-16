import { useState } from 'react';
function GetDegree() {
    const [number, setNumber] = useState(0);
    const [degree, setDegree] = useState(0);
    const [sum, setSum] = useState(0);

    function increment1() {
        setNumber(number + 1);
    }

    function decrement1() {
        if (number > 0) {
            setNumber(number - 1);
        }
    }
    function reset1() {
        setNumber(0);
    }

    function increment2() {
        setDegree(degree + 1);
    }

    function decrement2() {
        if (degree > 0) {
            setDegree(degree - 1);
        }
    }
    function reset2() {
        setDegree(0);
    }

    function sumDegree() {
        let a = 1;
        if (degree > a) {
            a++;
            setSum(number ** degree);
        }
        if (degree === 1) {
            setSum(number);
        }
    }

    return (
        <div className='btn'>
            <div className='display'>
                {number} ^ {degree} = {sum}
            </div>
            <div>
                <button onClick={increment1}>Inc</button>
                <button onClick={decrement1}>Dec</button>
                <button onClick={reset1}>Reset</button>
            </div>
            <div>
                <button onClick={increment2}>Inc</button>
                <button onClick={decrement2}>Dec</button>
                <button onClick={reset2}>Reset</button>
            </div>
            <button className='bnt-push' onClick={sumDegree}>
                push
            </button>
        </div>
    );
}

function App() {
    return (
        <div className='border'>
            <GetDegree />
        </div>
    );
}

export default App;
