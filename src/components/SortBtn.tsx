import React from "react";
import bubbleSort from "../algorithms/bubbleSort";

interface Sort {
  sortingAlgo: string;
  arr: number[];
  towers: JSX.Element[];
  HandleChange: Function;
  trace: number[][];
  sort: Function;
  setAlgo: Function;
}

function SortBtn(props: any) {
  return <button onClick={props.sort}>{props.sortingAlgo} Sort</button>;
}

export default SortBtn;
