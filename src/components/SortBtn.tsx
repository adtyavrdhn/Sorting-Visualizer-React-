import React from "react";
import logo from "./logo.svg";
import bubbleSort from "../algorithms/bubbleSort";

interface Sort {
  sort: string;
  arr: number[];
  towers: JSX.Element[];
  HandleChange: Function;
}

function SortBtn(props: any) {
  return <button onClick={props.HandleChange}>{props.sort} Sort</button>;
}

export default SortBtn;
