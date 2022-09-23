import { trace } from "console";
import React, { useState } from "react";

interface divs {
  towers: JSX.Element[];
}

function Towers(props: divs) {
  return <div className="TowerContainer justify-center">{props.towers}</div>;
}

export default Towers;
