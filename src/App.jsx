import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'

function App() {
  // const [count, setCount] = useState(0)
  function handleClick(){
    alert('clicked from function')
  }
  const handleClickAgain = () =>{
    alert('clicked from arrow function')
  }
  const arrayFunction = (num) => {
    alert( `you got ${num + 1} tk voucher`);
  }
 
  return (
    <>
        <h3>
          React core concept part 2 
        </h3>
        <Users>

        </Users>
    {/*    <Team>
         
       </Team>


        <Counter>
          
        </Counter>
        <button className='btn' 
           onClick={handleClick}>
            click from function
        </button>
          <br/>
        <button className='btn'
           onClick={handleClickAgain}>
            click from arrow function
        </button>
         <br/>
        <button className='btn' 
           onClick={()=>{alert('clicker from inline arrow function')}}>
            click from in-line arrow function
        </button>
         <br/>
        <button className='btn' 
           onClick={() => arrayFunction(98)}>
            click me to get 99 tk
        </button> */}
    </>
  )
}

export default App
