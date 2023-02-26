import { useEffect, useState } from "react";

import "./App.css";

import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState("#161f1d");


  const handleColorChange = () => {
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(newColor);
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (

    <div className="App " style={{ backgroundColor: color }}>
      <h2 className="clock">{time.toLocaleTimeString()}</h2>
      <button onClick={handleColorChange} className="color_picker">Random Color Picker</button>
      <h3 className="version">Version 1.00012</h3>
      <Header />
      <Aside />
      <Footer/>
      </div>
  );
}

export default App;
