import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import Header from "./components/Header";
import Towers from "./components/Towers";
import { Sorts } from "./helper/SortEnums";

function App() {
  const [sizeValue, setSizeValue] = useState(20);
  const [arr, setArr] = useState([0]);
  const [speed, setSpeed] = useState(0);
  // changing array whenever the size slider changes
  useEffect(() => {
    const newArr: number[] = [];
    while (newArr.length < sizeValue) {
      const r = Math.floor(Math.random() * 100) + 50;
      if (newArr.indexOf(r) === -1) newArr.push(r);
    }
    setArr(newArr);
  }, [sizeValue]);
  /////////////////////////////
  const Headerprops = {
    sizeValue: sizeValue,
    setSizeValue: setSizeValue,
    speed: speed,
    setSpeed: setSpeed,
  };
  return (
    <div className="w-full">
      <h1 className="text-center font-semibold text-4xl">Sorting Visualizer</h1>
      <Header {...Headerprops} />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-4 sm:grid-cols-1">
        <Towers
          arr={[...arr]}
          algo={Sorts.Bubble}
          speed={speed}
          Sorts={Sorts}
        ></Towers>
        <Towers
          arr={[...arr]}
          algo={Sorts.Selection}
          speed={speed}
          Sorts={Sorts}
        ></Towers>
        <Towers
          arr={[...arr]}
          algo={Sorts.Merge}
          speed={speed}
          Sorts={Sorts}
        ></Towers>
        <Towers
          arr={[...arr]}
          algo={Sorts.Insertion}
          speed={speed}
          Sorts={Sorts}
        ></Towers>
        <Towers
          arr={[...arr]}
          algo={Sorts.Quick}
          speed={speed}
          Sorts={Sorts}
        ></Towers>
      </div>
    </div>
  );
}

export default App;
