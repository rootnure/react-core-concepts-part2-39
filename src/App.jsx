import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Posts from './Posts';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick() {
    alert('btn clicked');
  }

  const handleClick2 = () => {
    alert('btn2 clicked');
  }

  const addFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <hr />
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />

      <Posts></Posts>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      {/* Vejailla */}
      <button onClick={() => alert('Click3 Clicked')}>Click 3</button>
      <button onClick={() => addFive(3)}>Add Five</button>
    </>
  )
}

export default App
