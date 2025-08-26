import { useState } from "react";
import Message from "./Message";
import Greeting from "./grettings"; // ✅ Correct import (capitalized)

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello React 🚀</h1>
      <Message />

      {/* ✅ Passing props */}
      <Greeting name="Sarang" />
      <Greeting name="Patil" />

      {/* ✅ Uncomment if you want counter */}
      
      <h2>Count: {count}</h2>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Click Me
      </button> 
      
    </div>
  );
}

export default App;
