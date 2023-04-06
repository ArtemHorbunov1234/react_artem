import { useState } from 'react';
function CalculationsMoney() {
    const [money, setMoney] = useState<number>(0);
    const [percent, setPercent] = useState(0);
    const [year, setYear] = useState(0);
    const [total, setTotal] = useState(0);
    function totalCalculation() {
        setTotal((money * percent * year) / 100);
        if (percent === 0 && year === 0) {
            setTotal(money);
        }
    }
    return (
        <div className='header'>
            <label>
                Amount of money:
                <input type='number' value={money} onChange={e => setMoney(Number(e.target.value))} />
            </label>
            <label>
                Percentage per year:
                <input type='number' value={percent} onChange={e => setPercent(Number(e.target.value))} />
            </label>
            <label>
                Number of years:
                <input type='number' value={year} onChange={e => setYear(Number(e.target.value))} />
            </label>
            <label>
                Total:
                <input type='number' value={total} onChange={e => setTotal(Number(e.target.value))} />
            </label>
            <button onClick={() => totalCalculation()}>Calculation</button>
        </div>
    );
}

function App() {
    return (
        <div className='App'>
            <CalculationsMoney />
        </div>
    );
}

export default App;
