type ParagraphProps = {
    title: string;
    text: string;
};

function Article(props: ParagraphProps) {
    return (
        <div className='article'>
            <h2>{props.title}</h2>
            <p className='paragraph'>{props.text}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h2 className='heading'>Hello</h2>
            <Article title='Article one' text='Another one' />
            <Article title='Some number' text='3' />
        </div>
    );
}

export default App;
