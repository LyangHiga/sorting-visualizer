import React, { useState, useEffect } from "react";
import useWindowDimensions from "./hooks/useWindowDim";
import { randomIntFromInterval } from "./arrHelper";
import "./SortVisualizer.css";
import { changeAllColor } from "./animations";
import Nav from "./Nav";
import BarContainer from "./BarContainer";

const MARGIN = 100;
// bar size + bar margin
const BAR_SIZE = 4;

const MIN_HEIGHT = 5;
// 8 vh aproximation
const NAV_HEIGHT = 200;

export default function SortVisualizer(props) {
  const [arr, setArr] = useState([]);
  const [disable, setDisable] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    resetArr();
    // empty brackets ensure the useEffect run only once
  }, []);

  const resetArr = () => {
    const newArr = [];
    const nbars = Math.floor((width - 2 * MARGIN) / BAR_SIZE);
    for (let i = 0; i < nbars; i++) {
      // 5 and 730 to fit in the screen
      // duplicated values are allowed
      newArr.push(randomIntFromInterval(MIN_HEIGHT, height - NAV_HEIGHT));
    }
    setArr(newArr);
    changeAllColor(arr.length, "blue");
  };

  return (
    <div>
      <Nav
        arr={arr}
        resetArr={resetArr}
        disable={disable}
        setDisable={setDisable}
      />
      <BarContainer arr={arr} />
    </div>
  );
}
