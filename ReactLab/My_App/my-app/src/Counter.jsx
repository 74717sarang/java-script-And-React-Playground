import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [color,setColor]=useState("green")
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div className="w-full">
     
        <button style={{color:"white",background:color}} onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <button onClick={() => setCount(count - 1)}>Decreses</button>
    </div>
  );
}

export default Counter;
