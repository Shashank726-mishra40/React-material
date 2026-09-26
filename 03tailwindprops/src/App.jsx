import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  let Myobj = {
    name : "Shahsank",
    age : 20
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-900 p-4 rounded-xl'>TailWind Test</h1>
       <Card  username="Ommmm" btnText="Click Me"/>
       <Card username = "Namahaa" btnText="Click to Read More"/>
    </>
  )
}

export default App
