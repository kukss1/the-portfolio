import { useEffect, useState } from "react";
import { bgColor } from "./assets/jsons/color";
import welcome from './assets/images/svg/wlcome.png'

import "./App.css";

import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import WelcomePage from "./welcomePage/WelcomePage";

function App() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState([bgColor[0]]);
  const [start, setStart] = useState(true);

  const handleColorChange = () => {
    const randomIndex = bgColor[Math.floor(Math.random() * bgColor.length)];
    return setColor(randomIndex);
  };

  const handleStartButtonClick = () => {
    setStart(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {start ? (
        <div className="startPage_wrapper">
          <WelcomePage/>
          <button
            className="start_button"
            onClick={() => {handleStartButtonClick()}}
          >
            <img src={welcome} alt="welcome" />
            <p>tap to go</p>
          </button>
        </div>
      ) : (
        <div className="App " style={{ backgroundColor: color }}>
          <h2 className="clock">{time.toLocaleTimeString()}</h2>
          <button onClick={handleColorChange} className="color_picker">
            Random Color Picker
          </button>
          <h3 className="version">Version 1.01010</h3>
          <Header />
          <Aside />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
