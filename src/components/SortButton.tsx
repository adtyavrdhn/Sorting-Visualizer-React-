import React from "react";

interface SortButtonProps {
  sortingAlgo: string;
  sort: Function;
}

function SortButton(props: SortButtonProps) {
  return (
    <button
      className="self-center inline-block px-2 py-2.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gradient-to-br focus:ring-2 dark:focus:ring-pink-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      onClick={() => props.sort(`${props.sortingAlgo}`)}
    >
      {props.sortingAlgo}
    </button>
  );
}

export default SortButton;
