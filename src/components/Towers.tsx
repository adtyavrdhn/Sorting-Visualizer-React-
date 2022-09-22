import React, { useState } from "react";
import logo from "./logo.svg";

interface divs {
  towers: JSX.Element[];
}

function Towers(props: any) {
  return (
    <div className="TowerContainer flex justify-center">{props.towers}</div>
  );
}

export default Towers;
