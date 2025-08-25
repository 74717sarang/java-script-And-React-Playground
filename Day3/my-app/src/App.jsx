import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './Message.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{ border: '10px solid black', padding: '10px', margin: '100px' }}>
       <div style={{ border: '1px solid black', padding: '10px' }}>
      <h2>Hi</h2>
      <div>
        Count is {count}
        <p>This is a test component.</p>
        <p>This is another paragraph.</p>
      </div>
            <Message/>

          </div>
      <div style={{ color:"tomato",display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px',fontSize: "32px" }  }>
          Count:
             <div style={{ color:"darkgreen"}}>
             {count}
             </div>
             
           </div>
          <button style={{color:"blue", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }} onClick={() => setCount(count + 1)}>
          Click me to increment
          </button>   Count is {count}

          <button style={{color:"red"}} onClick={() => setCount(count - 1)}>
          Click me to decrement</button>  count is {count}
         
         <button onClick={() => setCount(0)} style={{color:"green",padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          Set to 0</button>  count is {count}
          </div>
    </>
  )
}

export default App
