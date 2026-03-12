import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Bollar from './Bollar';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

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

  const friendsPromise = fetchFriends();

  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<h3>Friend Lists Loading . . .</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

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