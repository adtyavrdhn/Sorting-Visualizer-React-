import React from "react";
import "tailwindcss/tailwind.css";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Towers from "./components/Towers";

function App() {
  let arr = [];
  while (arr.length < 10) {
    var r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
  return (
    <div className="App">
      <h1 className="text-center font-semibold text-4xl">Sorting Visualizer</h1>
      <Header></Header>
      <Towers arr={arr}></Towers>
    </div>
  );
}

export default App;
