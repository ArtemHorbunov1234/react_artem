type NumbersProps = {
    num1: number;
    num2: number;
};

function NumbersDisplay({ num1, num2 }: NumbersProps) {
    if (num1 > num2) {
        return <div className='border'>{num1}</div>;
    } else {
        return <div className='border'>{num2}</div>;
    }
}

function NumbersArrow({ num1, num2 }: NumbersProps) {
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

type CardProps = {
    title: string;
    text: string;
};

type TextProps = {
    text: string;
};

function Title({ text }: TextProps) {
    return <h2>{text}</h2>;
}

function Text({ text }: TextProps) {
    return <p>{text}</p>;
}

function Card({ title, text }: CardProps) {
    return (
        <div className='card-profil'>
            <Title text={title} />
            <Text text={text} />
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
