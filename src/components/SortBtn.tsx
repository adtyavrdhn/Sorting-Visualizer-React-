import React from "react";
import logo from "./logo.svg";

interface Sort {
  sort: string;
}

function SortBtn(props: Sort) {
  return <button>{props.sort} Sort</button>;
}

export default SortBtn;
