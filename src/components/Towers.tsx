import React from "react";

interface divs {
  towers: JSX.Element[];
}

function Towers(props: divs) {
  return <div className="flex gap-1.5 mt-1 justify-center">{props.towers}</div>;
}

export default Towers;
