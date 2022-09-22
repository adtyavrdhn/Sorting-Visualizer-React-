import React from "react";
import logo from "./logo.svg";

function Towers(props: any) {
  const arr = props.arr;
  const towers = arr.map((n: number) => (
    <div className={"h-" + n + "px w-10px bg-black"} key={n}>
      {n}
    </div>
  ));

  return <div className="TowerContainer flex gap-10px">{towers}</div>;
}

export default Towers;
