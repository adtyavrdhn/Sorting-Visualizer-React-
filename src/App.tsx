import React from "react";
import "tailwindcss/tailwind.css";
import logo from "./logo.svg";
import "./App.css";
import RangeSlider from "./components/RangeSlider";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
