import React, { useState } from "react";
import data from "../data/sample.json";


const Carousel = () => {
  const [state, setState] = useState(0);

  function handleRightClick() {
    if (state >= data.length - 3) {
      setState(0);
    } else {
      setState((prev) => prev + 3);
    }
  }

  function handleLeftClick() {
    if (state <= 0) {
      setState(data.length-1);
    } else {
      setState((prev) => prev - 3);
    }
  }

  let resp = data.map((item) => (
    <div className="carousel-item" key={item.id}>
      <h3>Match Number {item.id}</h3>
      <div className="item">
        <span >{item.team1.name}</span>
        <span>{item.team1.score}</span>
      </div>
      <div className="item">
        <span>{item.team2.name}</span>
        <span>{item.team2.score}</span>
      </div>
    </div>
  ));

  return (
    <div className="main-container">
      <button onClick={handleLeftClick}>Left</button>
      <div className="carousel-wrapper">
        <h2>Live Matches!</h2>
        <div className="carousel-content" style={{ transform: `translateX(-${state * 100 / 3}%)` }}>
          {resp}
        </div>
      </div>
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
};

export default Carousel;
