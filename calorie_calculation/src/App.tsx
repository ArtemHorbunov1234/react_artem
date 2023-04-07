import { useState } from 'react';
function CalculationsCalorie() {
    const [calorie, setCalorie] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [totalProtein, setTotalProtein] = useState<Number>(0);
    const [totalFat, setTotalFat] = useState(0);
    const [totalCarbs, setTotalCarbs] = useState(0);
    function totalCalculation() {
        setTotalProtein(((protein / 100) * calorie) / 4);
        setTotalFat(((fat / 100) * calorie) / 9);
        setTotalCarbs(((carbs / 100) * calorie) / 4);
    }
    return (
        <div className='header'>
            <label>
                scalorie:
                <input type='number' value={calorie} onChange={e => setCalorie(Number(e.target.value))} />%
            </label>
            <label>
                protein:{totalProtein}
                <input type='number' value={protein} onChange={e => setProtein(Number(e.target.value))} />%
            </label>
            <label>
                fat:{totalFat}
                <input type='number' value={fat} onChange={e => setFat(Number(e.target.value))} />%
            </label>

            <label>
                carbs:{totalCarbs}
                <input type='number' value={carbs} onChange={e => setCarbs(Number(e.target.value))} />%
            </label>
            <button onClick={() => totalCalculation()}>Calculation</button>
        </div>
    );
}

function App() {
    return (
        <div className='App'>
            <CalculationsCalorie />
        </div>
    );
}

export default App;
