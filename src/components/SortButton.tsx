import React from "react";

interface SortButtonProps {
  sortingAlgo: string;
  sort: Function;
}

function SortButton(props: SortButtonProps) {
  return (
    <button onClick={() => props.sort(`${props.sortingAlgo} Sort`)}>
      {props.sortingAlgo} Sort
    </button>
  );
}

export default SortButton;
