type Card = {
      name: string;
      age: number;
      text: string;
}

function Profilcard(props:Card) {
    return(
      <div className='profilcard'>
          <p>Name: {props.name}</p>
          <p>Age:  {props.age}</p>
          <p>Infa: {props.text}</p>
      </div>
    )
}


type Number = {
  num1: number;
  num2: number;
}



function Sum(props: Number) {
  return (
    <div className='profilcard'>
    <p>Sum: {props.num1 + props.num2}</p>
  </div>
  )
}



function App() {
  return (
    <div className="App">
      <Profilcard name='Artem' age={20} text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum error necessitatibus officia facilis esse eveniet porro at dolor! Dolor odio quos temporibus minima dolorem quod sint similique distinctio odit.' />
      <Profilcard name='Igor' age={24} text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum error necessitatibus officia facilis esse eveniet porro at dolor! Dolor odio quos temporibus minima dolorem quod sint similique distinctio odit.' />
      <Profilcard name='Boba' age={28} text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum error necessitatibus officia facilis esse eveniet porro at dolor! Dolor odio quos temporibus minima dolorem quod sint similique distinctio odit.' />  
      <div>
      <Sum num1 = {1} num2 = {3}/>
      </div>
    </div>
  )
}

export default App




