import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [num, setnum] = useState(1)
   const addValue = () => {
    console.log("Value added", num)
    if(num >= 20){
      alert("Only 20 members are allowed")
      return(20)
    }
    // num = num + 1
    setnum(num + 1)
    
  }
  const removeValue = () => {
    console.log("Value removed", num)

    if (num <= 0) {
      alert("Value can't less than 0")
      return (0)
    }
    setnum(num - 1)
  }
  return (
    <>
      <h1>Hooks</h1>
      <h2>Counter Value: {num}</h2>
      <button onClick={addValue}>Add value: {num}</button>
      <button onClick={removeValue}>Remove value: {num}</button>
    </>
  )
}

export default App
