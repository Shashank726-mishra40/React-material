import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         traget : '_blank'
//     },
//     children : 'Click me for visit google'
// }

const ele = (
    <a href="@">Ommmmm</a>
)

const reactElement2 = React.createElement(
    'a',
    {href : 'https://google.com' , target : '_blank'},
    'click me to visit google'
)


createRoot(document.getElementById('root')).render(
 
    // reactElement2,
    <App />
  
)
