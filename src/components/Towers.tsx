import React, { useState, useEffect } from "react";
import bubbleSort from "../algorithms/bubbleSort";
import quickSort from "../algorithms/quickSort";
import selectionSort from "../algorithms/SelectionSort";
import insertionSort from "../algorithms/insertionSort";
import MergeSort from "../algorithms/mergeSort";
import produce from "immer";
import SortBtn from "./SortButton";

interface divs {
  arr: number[];
  algo: string;
  speed: number;
}

function Towers(props: divs) {
  const [towers, setTowers] = useState<JSX.Element[]>([]);
  const [narr, setnarr] = useState([0]);
  const [time, setTime] = useState("");

  function changeArr(arr: number[]) {
    const newArr = produce(arr, (draft) => {
      return [...draft];
    });
    setnarr(newArr);
  }

  useEffect(() => {
    changeArr(props.arr);
  }, [props.arr]);

  async function sort(algorithm: string) {
    let startTime = performance.now();
    switch (algorithm) {
      case "Bubble Sort":
        await bubbleSort([...narr], changeArr, props.speed);
        break;
      case "Quick Sort":
        await quickSort([...narr], 0, narr.length - 1, changeArr, props.speed);
        break;
      case "Selection Sort":
        await selectionSort([...narr], narr.length, changeArr, props.speed);
        break;
      case "Insertion Sort":
        await insertionSort([...narr], narr.length, changeArr, props.speed);
        break;
      case "Merge Sort":
        await MergeSort([...narr], changeArr, props.speed);
        break;
    }

    let endTime = performance.now();
    setTime(`${(endTime - startTime).toPrecision(8)} milliseconds`);
  }

  useEffect(() => {
    const temptowers: JSX.Element[] = narr.map((n: number, index: number) => (
      <div
        className={
          "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-md"
        }
        key={index}
        style={{ height: `${n / 10}rem`, width: `0.7%` }}
      ></div>
    ));
    setTowers(temptowers);
  }, [narr]);

  return (
    <div className="grid lg:gap-3 mt-1">
      <SortBtn sortingAlgo={props.algo} sort={sort}></SortBtn>
      <div className="flex gap-0.5 mt-1 justify-center">{towers}</div>
      <span className="text-center">Time Taken: {time}</span>
    </div>
  );
}

export default Towers;
