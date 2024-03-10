import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert('Button Clicked')
  }
  const handleClick2 = () => {
    alert('Button 2 Clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Core Concept2</h1>
      <Friends></Friends>

      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() => {alert('Third click')}}>Third Button</button>
      {/* Bejailla this */}
      <button onClick={() => addToFive(3)}>Four</button>
      
    </>
  )
}

export default App
