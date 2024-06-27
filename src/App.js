import chain from './assets/rand1.jpg';
import shells from './assets/rand2.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  const  time = new Date();
  const day = time.toLocaleString("en-us", {weekday: "long"});
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;
  const [over, setOver] = useState(false);
  const randonImgURL = "https://picsum.photos/400/265"

  if (day.toLowerCase() === "monday") {
    dayMessage = `Happy ${day}`;
  }else if (day.toLowerCase() === "tuesday") {
    dayMessage = dayMessage = `Happy ${day}`;
  }else if (day.toLowerCase() === "wednesday") {
    dayMessage = dayMessage = `Happy ${day}`;
  }else if (day.toLowerCase() === "thursday") {
    dayMessage = dayMessage = `Happy ${day}`;
  }else if (day.toLowerCase() === "friday") {
    dayMessage = dayMessage = `Happy ${day}`;
  }else {
    dayMessage = "Stay cool it's the weekday"
  }

  return (
    <div className="App">
      <h1>{dayMessage}</h1>
      {morning? <h2>Breakfast time</h2>: ""}
      <div>
        <img 
          onMouseOver={()=>setOver(true)}
          onMouseOut={()=>setOver(false)}
          src={over ? shells : chain}
          alt='imagine there is a random pic here'
          height={200}
          width={300}
        />
        <img 
          onMouseOver={()=>setOver(true)}
          onMouseOut={()=>setOver(false)}
          src={over ? require("./assets/rand3.jpeg") : require("./assets/rand4.jpeg")}
          alt='imagine there is another random pic here'
          height={200}
          width={300}
        />
        <img 
          onMouseOver={()=>setOver(true)}
          onMouseOut={()=>setOver(false)}
          src={over ?  require("./assets/rand5.jpeg") : randonImgURL}
          alt='imagine there is another random pic here'
          height={200}
          width={300}
        />
      </div>
    </div>
  );
}

export default App;
