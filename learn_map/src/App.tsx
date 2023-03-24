function App() {
    const numbers = [22, 33, 12, 879, 13];

    return (
        <div className='App'>
            {numbers.map((num, index) => (
                <div key={index}>{num}</div>
            ))}
        </div>
    );
}

export default App;
