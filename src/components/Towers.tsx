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
}

function Towers(props: divs) {
  const [towers, setTowers] = useState<JSX.Element[]>([]);
  const [narr, setnarr] = useState([0]);

  function changeArr(arr: number[]) {
    const newArr = produce(arr, (draft) => {
      return [...draft];
    });
    setnarr(newArr);
  }

  useEffect(() => {
    changeArr(props.arr);
  }, [props.arr]);

  function sort(algorithm: string) {
    switch (algorithm) {
      case "Bubble Sort":
        bubbleSort([...narr], changeArr);
        break;
      case "Quick Sort":
        quickSort([...narr], 0, narr.length - 1, changeArr);
        break;
      case "Selection Sort":
        selectionSort([...narr], narr.length, changeArr);
        break;
      case "Insertion Sort":
        insertionSort([...narr], narr.length, changeArr);
        break;
      case "Merge Sort":
        MergeSort([...narr], changeArr);
        break;
    }
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
      <div className="flex gap-1.5 mt-1 justify-center">{towers}</div>
    </div>
  );
}

export default Towers;
