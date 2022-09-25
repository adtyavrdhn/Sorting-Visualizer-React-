import React, { useState, useEffect } from "react";

interface divs {
  arr: number[];
  sort: Function;
}

function Towers(props: divs) {
  const [towers, setTowers] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const temptowers: JSX.Element[] = props.arr.map(
      (n: number, index: number) => (
        <div
          className={
            "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-md"
          }
          key={index}
          style={{ height: `${n / 7}rem`, width: `0.7%` }}
        ></div>
      )
    );
    setTowers(temptowers);
  }, [props.arr]);
  return <div className="flex gap-1.5 mt-1 justify-center">{towers}</div>;
}

export default Towers;
