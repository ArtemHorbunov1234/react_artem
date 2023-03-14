import { useState } from 'react';

function SimpleButtonClick() {
    function onButtonClick() {
        alert('Click');
    }

    function onClickWithMessage(message: string) {
        alert(message);
    }

    return (
        <>
            <button onClick={onButtonClick}>Click me</button>
            <button onClick={() => onClickWithMessage('hello from message')}>Click me (with message)</button>
        </>
    );
}

function IncrementButtonComponent() {
    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number + 1);
    }

    function decrement() {
        if (number > 0) {
            setNumber(number - 1);
        }
    }

    function reset() {
        setNumber(0);
    }

    return (
        <div>
            <div>{number}</div>
            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

type DoubleButtonWithInitialStateProps = {
    initialValue: number;
};

function DoubleButtonWithInitialState({ initialValue }: DoubleButtonWithInitialStateProps) {
    const [value, setValue] = useState(initialValue);

    function double() {
        setValue(value * 2);
    }

    return (
        <div>
            <div>{value}</div>
            <button onClick={double}>Double</button>
        </div>
    );
}

function StateWithConditionals() {
    const [value, setValue] = useState(0);

    function increment() {
        setValue(value + 1);
    }

    function decrement() {
        setValue(value - 1);
    }

    function reset() {
        setValue(0);
    }

    let expressionString;

    if (value === 0) {
        expressionString = `${value} = 0`;
    } else if (value > 0) {
        expressionString = `${value} > 0`;
    } else {
        expressionString = `${value} < 0`;
    }

    return (
        <div>
            <div>{value}</div>
            <div>{expressionString}</div>
            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
            <button onClick={reset}>Reset</button>{' '}
        </div>
    );
}

function App() {
    return (
        <div className='App'>
            <StateWithConditionals />
        </div>
    );
}

export default App;
