import React, { useState } from "react";
import logo from "./logo.svg";

function RangeSlider(props: any) {
  return (
    <div className="RangeSlider flex justify-center">
      <label htmlFor="size" className="size mr-2 mt-0.2">
        {props.type}
      </label>
      <input
        className={props.type + "-range"}
        min={props.minimum}
        max={props.maximum}
        type="range"
        name={props.type}
        id={props.type + "-slider"}
        step={props.step}
        value={props.value}
        disabled={props.disabled}
        onChange={(event: any) => props.setVal(event.target.value)}
      />
    </div>
  );
}

export default RangeSlider;
