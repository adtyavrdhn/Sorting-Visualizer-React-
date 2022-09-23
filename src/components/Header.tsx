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
  sort: Function;
  setAlgo: Function;
}
function Header(props: ChangeInput) {
  return (
    <div className="Header flex justify-around align-center">
      <div className="RangeSliderContainer self-start">
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
          type={"size"}
          minimum={10}
          maximum={80}
          initialvalue={60}
          step={10}
          value={props.sizeValue}
          setVal={props.setSizeValue}
        ></RangeSlider>
      </div>
      <div className="SortButtonContainer flex gap-5 self-end">
        <SortBtn
          sortingAlgo={"Bubble"}
          arr={props.arr}
          towers={props.towers}
          sort={props.sort}
          setAlgo={props.setAlgo}
        ></SortBtn>
        <SortBtn
          sortingAlgo={"Merge"}
          arr={props.arr}
          towers={props.towers}
          sort={props.sort}
          setAlgo={props.setAlgo}
        ></SortBtn>
        <SortBtn
          sortingAlgo={"Insertion"}
          arr={props.arr}
          towers={props.towers}
          sort={props.sort}
          setAlgo={props.setAlgo}
        ></SortBtn>
        <SortBtn
          sortingAlgo={"Selection"}
          arr={props.arr}
          towers={props.towers}
          sort={props.sort}
          setAlgo={props.setAlgo}
        ></SortBtn>
        <SortBtn
          sortingAlgo={"Quick"}
          arr={props.arr}
          towers={props.towers}
          sort={props.sort}
          setAlgo={props.setAlgo}
        ></SortBtn>
      </div>
    </div>
  );
}

export default Header;
