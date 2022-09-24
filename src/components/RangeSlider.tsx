import React from "react";

function RangeSlider({ name, max, min, step, value, disabled, setValue }: any) {
  return (
    <div className="flex justify-center">
      <label htmlFor="size" className="size mr-2 mt-0.2">
        {name}
      </label>
      <input
        min={min}
        max={max}
        type="range"
        name={name}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(event: any) => setValue(event.target.value)}
      />
    </div>
  );
}

export default RangeSlider;
