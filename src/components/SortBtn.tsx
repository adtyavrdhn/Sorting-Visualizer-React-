import React from "react";
import logo from "./logo.svg";
import bubbleSort from "../algorithms/bubbleSort";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

interface Sort {
  sort: string;
  arr: number[];
}

function SortBtn(props: Sort) {
  return (
    <button onClick={() => bubbleSort(props.arr, delay)}>
      {props.sort} Sort
    </button>
  );
}

export default SortBtn;
