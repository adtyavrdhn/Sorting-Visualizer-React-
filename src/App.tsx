import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import bubbleSort from "./algorithms/bubbleSort";
import "./App.css";
import Header from "./components/Header";
import Towers from "./components/Towers";
import { delay, swap } from "./algorithms/utility";
import quickSort from "./algorithms/quickSort";
import selectionSort from "./algorithms/SelectionSort";

let arr: number[] = [];

function App(props: any) {
  const [sizeValue, setSizeValue] = useState(20);
  const [speed, setSpeed] = useState(20);
  let [towers, setTowers] = useState<JSX.Element[]>([]);

  function initTowers() {
    let temptowers: JSX.Element[] = arr.map((n: number) => (
      <div
        className={"bg-black tower"}
        key={n}
        style={{ height: `${n / 7}rem` }}
      ></div>
    ));
    setTowers(temptowers);
  }

  function sort(event: any) {
    let algorithm: string = event.target.innerHTML;

    switch (algorithm) {
      case "Bubble Sort":
        bubbleSort(arr, initTowers);
        break;
      case "Quick Sort":
        quickSort(arr, 0, arr.length - 1, initTowers);
        break;
      case "Selection Sort":
        selectionSort(arr, arr.length, initTowers);
    }
  }

  function initarr() {
    while (arr.length < sizeValue) {
      var r = Math.floor(Math.random() * 100) + 50;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    initTowers();
  }
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
    sort: sort,
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
