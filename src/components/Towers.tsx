import React from "react";
import logo from "./logo.svg";

function Towers(props: any) {
  const arr = props.arr;
  const towers = arr.map((n: number) => (
    <div className={"h-" + n + " w-10px text-black"} key={n}></div>
  ));

  return <div className="TowerContainer">{towers}</div>;
}

export default Towers;
