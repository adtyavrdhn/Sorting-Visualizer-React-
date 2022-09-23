import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import Header from "./components/Header";
import Towers from "./components/Towers";
import bubbleSort from "./algorithms/bubbleSort";
import quickSort from "./algorithms/quickSort";
import selectionSort from "./algorithms/SelectionSort";
import insertionSort from "./algorithms/insertionSort";
// import heapSort from "./algorithms/heapSort";
import MergeSort from "./algorithms/mergeSort";

function App(props: any) {
  const [sizeValue, setSizeValue] = useState(20);
  const [speed, setSpeed] = useState(20);
  let [arr, setArr] = useState([0]);
  let [towers, setTowers] = useState<JSX.Element[]>([]);

  function initTowers() {
    let temptowers: JSX.Element[] = arr.map((n: number, index: number) => (
      <div
        className={"bg-black tower"}
        key={index}
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
        break;
      case "Insertion Sort":
        insertionSort(arr, arr.length, initTowers);
        break;
      // case "Heap Sort":
      //   heapSort(arr, initTowers);
      //   break;
      case "Merge Sort":
        MergeSort(arr, initTowers);
        break;
    }
  }

  function initarr() {
    let array: number[] = [];
    while (array.length < sizeValue) {
      var r = Math.floor(Math.random() * 100) + 50;
      if (array.indexOf(r) === -1) array.push(r);
    }
    setArr(array);
    initTowers();
  }
  useEffect(() => {
    initarr();
    console.log("YES");
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
