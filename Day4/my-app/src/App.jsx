import { useState } from "react";
import "./App.css";
import Counter from "./Counter.jsx";
import Grettings from "./Grettings.jsx";
import ProfileCard from "./ProfileCard.jsx";
import Fruite from "./Fruite.jsx";
import ToDoList from "./ToDoList.jsx";
import EventHandeling from "./EventHandeling.jsx";
import FromEx from "./FromEx.jsx";
import useEffectHandling from "./useEffectHandling.jsx";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <Grettings name="Sarang" />
        <Grettings name="React Learner" />

        <ProfileCard
          name="Sarang"
          role="React Learner"
          avatar="https://via.placeholder.com/100"
        />
        <ProfileCard
          name="Sarang Patil"
          role="New React Learner"
          avatar="https://via.placeholder.com/100"
        />

        <Counter />

<Fruite />
        {/* Show Fruite only when "show" is true */}
        <h1>Day 4 Eg TODO</h1>
        {show && <ToDoList />}

        {/* Toggle button */}
        <button onClick={() => setShow(!show)}>
          {show ? "Hide ToDO List" : "Show ToDO List"}
        </button>
      </div>

      <h2>Day 5 Event Handeling</h2>
      <EventHandeling />
      <FromEx />
      <h2>Day 6 useEffect</h2>      
        
         <useEffectHandling /> 
    </>
  );
}

export default App;
