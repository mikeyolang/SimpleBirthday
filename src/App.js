import "./App.css";
import data from "./data";
import Birthday from "./Components/Birthdays.component";
import { useState } from "react";

function App() {
  const [people,setPeople] = useState(data);
  return (
    <>
      <div className="Container">
        <h1>{people.length} Birthdays Today</h1>
        <Birthday people={people}/>
        <button className="btn" type="button" onClick={()=>setPeople([])}>Clear All</button>
        </div>;
    </>
  ); 
  
}

export default App;
