import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
 
// let counter = 5
let [counter,setCounter] = useState(15)
const addValue = () =>{
  counter = counter + 1
  if(counter<=20) {
  setCounter(counter)
  console.log(counter)
  }
  
}
const decValue = () =>{
  counter = counter - 1
  if(counter>=0){ 
  setCounter(counter)
  console.log(counter)
  }
  
}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br></br>
      <button onClick={decValue}>Decrease Value {counter}</button>

      <p>Hello World : {counter}</p>
     
    </>
  )
}

export default App
