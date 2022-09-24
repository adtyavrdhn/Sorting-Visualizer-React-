import React from "react";

interface SortButtonProps {
  sortingAlgo: string;
  sort: Function;
}

function SortButton(props: SortButtonProps) {
  return (
    <button
      className="shadow-md rounded-lg p-3 bg-purple-50"
      onClick={() => props.sort(`${props.sortingAlgo} Sort`)}
    >
      {props.sortingAlgo} Sort
    </button>
  );
}

export default SortButton;
