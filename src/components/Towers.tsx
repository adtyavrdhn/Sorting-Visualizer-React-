import React, { useState } from "react";
import logo from "./logo.svg";

interface divs {
  arr: Array<number>;
}

function Towers(props: divs) {
  const arr = props.arr;
  const towers = arr.map((n: number) => (
    <div
      className={"bg-black tower"}
      key={n}
      style={{ height: `${n}px` }}
    ></div>
  ));

  return <div className="TowerContainer flex justify-center">{towers}</div>;
}

export default Towers;
