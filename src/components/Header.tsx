import React from "react";
import RangeSlider from "./RangeSlider";
import SortBtn from "./SortButton";

interface ChangeInput {
  sizeValue: number;
  setSizeValue: Function;
  sort: Function;
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
          name={"size"}
          min={10}
          max={80}
          initialvalue={60}
          step={10}
          value={props.sizeValue}
          setValue={props.setSizeValue}
        ></RangeSlider>
      </div>
      <div className="flex gap-5 self-end mt-3">
        <SortBtn sortingAlgo={"Bubble"} sort={props.sort}></SortBtn>
        <SortBtn sortingAlgo={"Merge"} sort={props.sort}></SortBtn>
        <SortBtn sortingAlgo={"Insertion"} sort={props.sort}></SortBtn>
        <SortBtn sortingAlgo={"Selection"} sort={props.sort}></SortBtn>
        <SortBtn sortingAlgo={"Quick"} sort={props.sort}></SortBtn>
        <button
          className="shadow-md rounded-lg p-3 bg-purple-50"
          onClick={() => props.allSort()}
        >
          All
        </button>
      </div>
    </div>
  );
}

export default Header;
