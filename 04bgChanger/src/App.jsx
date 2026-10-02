import { useState } from 'react'


function App() {
  let[color,setColor] = useState("red");
  console.log(color)

  return (
    <>
    <div
  style={{
    width: "100%",
    height: "100vh",
    backgroundColor: color
  }}
>
  
</div>
<div className="btnContainer">
   <button onClick={()=>setColor("Red")}>Red</button>
  <button onClick={()=>setColor("Blue")}>Blue</button>
  <button onClick={()=>setColor("Green")}>Green</button>
  <button onClick={()=>setColor("White")}>White</button>
</div>

    </>
  )
}

export default App
