import React from "react";
import logo from "./logo.svg";
import bubbleSort from "../algorithms/bubbleSort";

interface Sort {
  sort: string;
  arr: number[];
}

function SortBtn(props: Sort) {
  return (
    <button onClick={() => bubbleSort(props.arr)}>{props.sort}Sort</button>
  );
}

export default SortBtn;
