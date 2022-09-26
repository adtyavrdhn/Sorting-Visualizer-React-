import React from "react";
import RangeSlider from "./RangeSlider";

interface ChangeInput {
  sizeValue: number;
  setSizeValue: Function;
  allSort: Function;
}
function Header(props: ChangeInput) {
  return (
    <div className="flex justify-around align-center pb-15px">
      <div className="self-start">
        {/* <RangeSlider
          type={"speed"}
          minimum={10}
          maximum={100}
          initialvalue={60}
          step={10}
          value={props.speed}
          setVal={props.setSpeed}
        ></RangeSlider> */}
        <RangeSlider
          name={"Size"}
          min={10}
          max={80}
          initialvalue={30}
          step={10}
          value={props.sizeValue}
          setValue={props.setSizeValue}
        ></RangeSlider>
      </div>
      <div className="flex gap-5 self-end mt-3">
        {/* <button
          className="inline-block px-6 py-2.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => props.allSort()}
        >
          All
        </button> */}
      </div>
    </div>
  );
}

export default Header;
