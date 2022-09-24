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

<<<<<<< Updated upstream
  function initarr() {
    arr = [];
    // let array:number[] = [];
    while (arr.length < sizeValue) {
      var r = Math.floor(Math.random() * 100) + 50;
      if (arr.indexOf(r) === -1) arr.push(r);
=======
  useEffect(() => {
    const temptowers: JSX.Element[] = arr.map((n: number, index: number) => (
      <div
        className={
          "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"
        }
        key={index}
        style={{ height: `${n / 7}rem`, width: `0.7%` }}
      ></div>
    ));
    setTowers(temptowers);
  }, [arr]);

  useEffect(() => {
    const newArr: number[] = [];
    while (newArr.length < sizeValue) {
      const r = Math.floor(Math.random() * 100) + 50;
      if (newArr.indexOf(r) === -1) newArr.push(r);
>>>>>>> Stashed changes
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
      <div className="w-full">
        <div className="flex mt-3 gap-1.5 justify-center">{towers}</div>
      </div>
    </div>
  );
}

export default App;
