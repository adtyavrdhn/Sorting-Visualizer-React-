import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import Header from "./components/Header";
import bubbleSort from "./algorithms/bubbleSort";
import quickSort from "./algorithms/quickSort";
import selectionSort from "./algorithms/SelectionSort";
import insertionSort from "./algorithms/insertionSort";
import MergeSort from "./algorithms/mergeSort";
import Towers from "./components/Towers";
import { delay } from "./algorithms/utility";

function App() {
  const [sizeValue, setSizeValue] = useState(20);
  const [arr, setArr] = useState([0]);
  const [sarr, setSarr] = useState([0]);
  const [towers, setTowers] = useState<JSX.Element[]>([]);

  function sort(algorithm: string) {
    switch (algorithm) {
      case "Bubble Sort":
        bubbleSort(arr, setArr);
        break;
      case "Quick Sort":
        quickSort(arr, 0, arr.length - 1, setArr);
        break;
      case "Selection Sort":
        selectionSort(arr, arr.length, setArr);
        break;
      case "Insertion Sort":
        insertionSort(arr, arr.length, setArr);
        break;
      case "Merge Sort":
        MergeSort(arr, setArr);
        break;
    }
  }

  async function allSort() {
    await bubbleSort(arr, setArr);

    setArr([...sarr]);
    await delay(45);
    await quickSort([...sarr], 0, arr.length - 1, setArr);

    setArr([...sarr]);
    await delay(45);
    await selectionSort([...sarr], arr.length, setArr);

    setArr([...sarr]);
    await delay(45);
    await insertionSort([...sarr], arr.length, setArr);
    setArr([...sarr]);

    await delay(45);
    await MergeSort([...sarr], setArr);
  }

  useEffect(() => {
    const temptowers: JSX.Element[] = arr.map((n: number, index: number) => (
      <div
        className={
          "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-md"
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
    }
    setArr(newArr);
    setSarr([...newArr]);
  }, [sizeValue]);

  const Headerprops = {
    sizeValue: sizeValue,
    setSizeValue: setSizeValue,
    sort: sort,
    allSort: allSort,
  };
  return (
    <div className="w-full">
      <h1 className="text-center font-semibold text-4xl">Sorting Visualizer</h1>
      <Header {...Headerprops} />
      <div>
        <div className="flex mt-3 gap-1.5 justify-center">{towers}</div>
        {/* <Towers arr={[...arr]} sort={sort}></Towers> */}
      </div>
    </div>
  );
}

export default App;
