import './App.css'
import Batsman from './Batsman';
import Bollar from './Bollar';
import Counter from './Counter';
import Users from './Users';

function App() {

  function handleClick() {
    alert('Normal Function');
  }
  const handleArrow = () => {
    alert('Arrow Function')
  }

  const add5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }


  return (
    <>
      <h3>Vite + React</h3>

      <Users></Users>

      <Bollar></Bollar>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>Normal Function</button>
      <button onClick={handleArrow}>Arrow Function</button>
      <button onClick={() => {alert('Inline Arrow Function')}}>Inline Function</button> <br/>
      <button onClick={ () => add5(10)}>Add 5</button>
    </>
  )
}

export default App