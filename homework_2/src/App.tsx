type Person = {
    num1: number;
    num2: number;
};

function NumbersDisplay({ num1, num2 }: Person) {
    if (num1 > num2) {
        return <div className='border'>{num1}</div>;
    } else if (num2 > num1) {
        return <div className='border'>{num2}</div>;
    } else {
        return (
            <div className='border'>
                {num1} {num2}
            </div>
        );
    }
}

function NumbersArrow({ num1, num2 }: Person) {
    if (num1 > num2) {
        return (
            <div className='border'>
                {num1} &gt; {num2}
            </div>
        );
    } else if (num2 > num1) {
        return (
            <div className='border'>
                {num1} &lt; {num2}
            </div>
        );
    } else {
        return (
            <div className='border'>
                {num1} = {num2}
            </div>
        );
    }
}

type Cardtitle = {
    title: string;
    text: string;
};

function Card({ title, text }: Cardtitle) {
    return (
        <div className='card-profil'>
            <div>{title}</div>
            <div className='textCard'>{text}</div>
        </div>
    );
}

function App() {
    return (
        <div>
            <NumbersDisplay num1={2} num2={1} />
            <NumbersDisplay num1={4} num2={4} />
            <NumbersArrow num1={5} num2={3} />
            <NumbersArrow num1={2} num2={3} />
            <NumbersArrow num1={5} num2={5} />
            <Card title='Artem' text='ssssss333333333333333333333333333333sssssssssssssssssssssssssssssssssssssssss' />
        </div>
    );
}

export default App;
