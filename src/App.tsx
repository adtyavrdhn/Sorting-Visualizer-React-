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

  // sorting using all the sorting algorithms one by one
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
  // changing array whenever the size slider changes
  useEffect(() => {
    const newArr: number[] = [];
    while (newArr.length < sizeValue) {
      const r = Math.floor(Math.random() * 100) + 50;
      if (newArr.indexOf(r) === -1) newArr.push(r);
    }
    setArr(newArr);
    setSarr([...newArr]);
  }, [sizeValue]);
  /////////////////////////////
  const Headerprops = {
    sizeValue: sizeValue,
    setSizeValue: setSizeValue,
    allSort: allSort,
  };
  return (
    <div className="w-full">
      <h1 className="text-center font-semibold text-4xl">Sorting Visualizer</h1>
      <Header {...Headerprops} />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-4 sm:grid-cols-1">
        <Towers arr={[...arr]} algo={"Bubble Sort"}></Towers>
        <Towers arr={[...arr]} algo={"Selection Sort"}></Towers>
        <Towers arr={[...arr]} algo={"Merge Sort"}></Towers>
        <Towers arr={[...arr]} algo={"Insertion Sort"}></Towers>
        <Towers arr={[...arr]} algo={"Quick Sort"}></Towers>
      </div>
    </div>
  );
}

export default App;
