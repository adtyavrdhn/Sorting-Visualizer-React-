import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Towers from "./components/Towers";

function App(props: any) {
  const [sizeValue, setSizeValue] = useState(20);
  const [speed, setSpeed] = useState(10);

  let arr = [];
  while (arr.length < sizeValue) {
    var r = Math.floor(Math.random() * 100) + 50;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  const Headerprops = {
    sizeValue: sizeValue,
    setSizeValue: setSizeValue,
    speed: speed,
    setSpeed: setSpeed,
    arr: arr,
  };
  return (
    <div className="App">
      <h1 className="text-center font-semibold text-4xl">Sorting Visualizer</h1>
      <Header {...Headerprops} />
      <Towers arr={arr}></Towers>
    </div>
  );
}

export default App;
