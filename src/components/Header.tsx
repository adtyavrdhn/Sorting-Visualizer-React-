import React from "react";
import RangeSlider from "./RangeSlider";
import SortBtn from "./SortBtn";
import logo from "./logo.svg";

function Header() {
  return (
    <div className="Header flex justify-around align-center">
      <div className="RangeSliderContainer self-start">
        <RangeSlider
          type={"speed"}
          minimum={10}
          maximum={100}
          initialvalue={60}
          step={10}
        ></RangeSlider>
        <RangeSlider
          type={"size"}
          minimum={10}
          maximum={100}
          initialvalue={60}
          step={10}
        ></RangeSlider>
      </div>
      <div className="SortButtonContainer flex gap-5 self-end">
        <SortBtn sort={"Bubble"}></SortBtn>
        <SortBtn sort={"Heap"}></SortBtn>
        <SortBtn sort={"Merge"}></SortBtn>
        <SortBtn sort={"Insertion"}></SortBtn>
        <SortBtn sort={"Selection"}></SortBtn>
      </div>
    </div>
  );
}

export default Header;
