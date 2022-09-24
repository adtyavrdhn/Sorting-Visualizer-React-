import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import Header from "./components/Header";
import Towers from "./components/Towers";
import bubbleSort from "./algorithms/bubbleSort";
import quickSort from "./algorithms/quickSort";
import selectionSort from "./algorithms/SelectionSort";
import insertionSort from "./algorithms/insertionSort";
import MergeSort from "./algorithms/mergeSort";

let arr: number[] = [];

function App(props: any) {
  const [sizeValue, setSizeValue] = useState(20);
  // const [speed, setSpeed] = useState(20);
  // const [arr, setArr] = useState([0]);
  // const [algo, setAlgo] = useState("");
  // const [sorted, setSorted] = useState(false);
  let [towers, setTowers] = useState<JSX.Element[]>([]);

  function initTowers(arr: number[]) {
    let temptowers: JSX.Element[] = arr.map((n: number, index: number) => (
      <div
        className={"bg-black"}
        key={index}
        style={{ height: `${n / 7}rem`, width: `.8%` }}
      ></div>
    ));
    setTowers(temptowers);
  }

  function sort(algorithm: string) {
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
      case "Merge Sort":
        MergeSort(arr, initTowers);
        break;
    }
  }

  function initarr() {
    arr = [];
    // let array:number[] = [];
    while (arr.length < sizeValue) {
      var r = Math.floor(Math.random() * 100) + 50;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    // setArr(array);
    initTowers(arr);
  }
  useEffect(() => {
    initarr();
  }, [sizeValue]);

  const Headerprops = {
    sizeValue: sizeValue,
    setSizeValue: setSizeValue,
    sort: sort,
  };
  return (
    <div className="App">
      <h1 className="text-center font-semibold text-4xl">Sorting Visualizer</h1>
      <Header {...Headerprops} />
      <div className="w-full auto-cols-auto p-35px">
        <div className="flex gap-1.5 mt-1 justify-center">{towers}</div>
      </div>
    </div>
  );
}

export default App;
