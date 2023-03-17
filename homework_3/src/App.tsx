import { useState } from 'react';

function GetDegree() {
    const [number, setNumber] = useState(0);
    const [degree, setDegree] = useState(1);
    const [sum, setSum] = useState(0);

    function decrementNumber() {
        if (number > 0) {
            setNumber(number - 1);
        }
    }

    function decrementDegree() {
        if (degree > 0) {
            setDegree(degree - 1);
        }
    }

    return (
        <div className='btn'>
            <div className='display'>
                {number} ^ {degree} = {sum}
            </div>
            <div>
                <button onClick={() => setNumber(number + 1)}>Inc</button>
                <button onClick={decrementNumber}>Dec</button>
                <button onClick={() => setNumber(0)}>Reset</button>
            </div>
            <div>
                <button onClick={() => setDegree(degree + 1)}>Inc</button>
                <button onClick={decrementDegree}>Dec</button>
                <button onClick={() => setDegree(0)}>Reset</button>
            </div>
            <button className='bnt-push' onClick={() => setSum(number ** degree)}>
                push
            </button>
        </div>
    );
}

function ClickMe() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
        </div>
    );
}

function SquareDisappears() {
    const [number, setNumber] = useState(0);

    let square;
    if (number === 1) {
        square = <div className='square'>SQUARE</div>;
    }

    return (
        <div className='disappears'>
            {square}
            <div>
                <button onClick={() => setNumber(0)}>HIDE</button>
                <button onClick={() => setNumber(1)}>SHOW</button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <GetDegree />
            <div>
                <ClickMe />
            </div>
            <SquareDisappears />
        </div>
    );
}

export default App;
