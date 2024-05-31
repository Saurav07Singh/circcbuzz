import React, { useState,useEffect } from "react";
import data from "../data/sample1.json";


const Auto = () => {
  const [state, setState] = useState(0);


  useEffect(()=>{
    const interval = setInterval(() => {
      setState((prev) => (prev >= data.length - 3 ? 0 : prev + 3));
    }, 2000);

    return () => clearInterval(interval);

  },[])

  let resp = data.map((item) => (
    <div className="carousel-item" key={item.id}>
      <h3>Match Number {item.id}</h3>
      <div className="item item1">
        <img src={`${item.img}`} />
        <h3>{item.detail.substring(0,40)}</h3>
      </div>
    </div>
  ));

  return (
    <div className="main-container">
      
      <div className="carousel-wrapper">
        <h2>HighLights</h2>
        <div className="carousel-content" style={{ transform: `translateX(-${state * 100 / 3}%)` }}>
          {resp}
        </div>
      </div>
  
    </div>
  );
};

export default Auto;
