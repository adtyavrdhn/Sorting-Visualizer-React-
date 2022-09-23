import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import bubbleSort from "./algorithms/bubbleSort";
import "./App.css";
import Header from "./components/Header";
import Towers from "./components/Towers";
import { delay } from "./algorithms/utility";

function App(props: any) {
  const [sizeValue, setSizeValue] = useState(20);
  const [speed, setSpeed] = useState(20);
  let [towers, setTowers] = useState<JSX.Element[]>([]);

  let arr: number[] = [];
  let temptowers: JSX.Element[] = [];

  function initTowers() {
    temptowers = arr.map((n: number) => (
      <div
        className={"bg-black tower"}
        key={n}
        style={{ height: `${n / 7}rem` }}
      ></div>
    ));

    setTowers(temptowers);
  }

  function initarr() {
    while (arr.length < sizeValue) {
      var r = Math.floor(Math.random() * 100) + 50;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    initTowers();
  }
  // useEffect(() => {
  //   console.log("YES"); keeping this will end up in an infinite loop no idea why
  //   initarr();
  // });

  useEffect(() => {
    initarr();
  }, [sizeValue]);

  const Headerprops = {
    sizeValue: sizeValue,
    setSizeValue: setSizeValue,
    speed: speed,
    setSpeed: setSpeed,
    arr: arr,
    towers: towers,
  };
  return (
    <div className="App">
      <h1 className="text-center font-semibold text-4xl">Sorting Visualizer</h1>
      <Header {...Headerprops} />
      <Towers towers={towers}></Towers>
    </div>
  );
}

export default App;
