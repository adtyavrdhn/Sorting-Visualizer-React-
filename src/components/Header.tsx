import React from "react";
import RangeSlider from "./RangeSlider";
import SortBtn from "./SortBtn";
import logo from "./logo.svg";

interface ChangeInput {
  sizeValue: number;
  setSizeValue: Function;
  speed: number;
  setSpeed: Function;
  arr: number[];
  towers: JSX.Element[];
}
function Header(props: ChangeInput) {
  return (
    <div className="Header flex justify-around align-center">
      <div className="RangeSliderContainer self-start">
        <RangeSlider
          type={"speed"}
          minimum={10}
          maximum={100}
          initialvalue={60}
          step={10}
          value={props.speed}
          setVal={props.setSpeed}
        ></RangeSlider>
        <RangeSlider
          type={"size"}
          minimum={10}
          maximum={100}
          initialvalue={60}
          step={10}
          value={props.sizeValue}
          setVal={props.setSizeValue}
        ></RangeSlider>
      </div>
      <div className="SortButtonContainer flex gap-5 self-end">
        <SortBtn
          sort={"Bubble"}
          arr={props.arr}
          towers={props.towers}
        ></SortBtn>
        <SortBtn sort={"Heap"} arr={props.arr} towers={props.towers}></SortBtn>
        <SortBtn sort={"Merge"} arr={props.arr} towers={props.towers}></SortBtn>
        <SortBtn
          sort={"Insertion"}
          arr={props.arr}
          towers={props.towers}
        ></SortBtn>
        <SortBtn
          sort={"Selection"}
          arr={props.arr}
          towers={props.towers}
        ></SortBtn>
      </div>
    </div>
  );
}

export default Header;
