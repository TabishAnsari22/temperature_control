import React, { useState } from "react";

const Temperature = () => {
  const [temperature, setTemperature] = useState(10);
  const [color, setColor] = useState("cold");
  const increment = () => {
    setTemperature(temperature + 1);
    if (temperature >= 14) {
      setColor("hot");
    }
  };

  const decrement = () => {
    setTemperature(temperature - 1);
    if (temperature <= 14) {
      setColor("cold");
    }
  };

  return (
    <>
        <h1>Temperature Control</h1>
      <div className="mainContainer">
        <div className="container">
          <div className={`display ${color}`}>{temperature}°C</div>
        </div>
        <div className="buttonMain">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </>
  );
};

export default Temperature;
