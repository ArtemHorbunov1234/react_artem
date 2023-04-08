import { useState } from 'react';
function CalculationsCalorie() {
    const [calorie, setCalorie] = useState<number | ''>('');
    const [protein, setProtein] = useState<number | ''>('');
    const [fat, setFat] = useState<number | ''>('');
    const [carbs, setCarbs] = useState<number | ''>('');
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalFat, setTotalFat] = useState(0);
    const [totalCarbs, setTotalCarbs] = useState(0);
    function totalCalculation() {
        if (protein === '' || calorie === '' || carbs === '' || fat === '') {
            return;
        }

        setTotalProtein(((protein / 100) * calorie) / 4);
        setTotalFat(((fat / 100) * calorie) / 9);
        setTotalCarbs(((carbs / 100) * calorie) / 4);
    }

    function convertString(value: string) {
        const numValue = Number(value);
        if (numValue === 0) {
            return '';
        } else {
            return numValue;
        }
    }

    return (
        <div className='header'>
            <label className='header--text'>
                calorie:
                <input type='number' value={calorie} onChange={e => setCalorie(convertString(e.target.value))} />
            </label>
            <label className='header--text'>
                protein:{totalProtein.toFixed(2)}grams
                <input type='number' value={protein} onChange={e => setProtein(convertString(e.target.value))} />%
            </label>
            <label className='header--text'>
                fat:{totalFat.toFixed(2)}grams
                <input type='number' value={fat} onChange={e => setFat(convertString(e.target.value))} />%
            </label>

            <label className='header--text'>
                carbs:{totalCarbs.toFixed(2)}grams
                <input type='number' value={carbs} onChange={e => setCarbs(convertString(e.target.value))} />%
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
