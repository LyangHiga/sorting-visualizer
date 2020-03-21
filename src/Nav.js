import React from 'react';
import bubbleSort from './algorithms/bubbleSort';
import selectionSort from './algorithms/selectionSort';
import insertionSort from './algorithms/insertSort';
import mergeSort from './algorithms/mergeSort';
import { testSortingAlgorithms } from './arrHelper';

export default function Nav(props) {
  //   console.log(`arr props= ${props.arr}`);
  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <div className="btns">
        <button onClick={() => props.resetArr()}>New Bars</button>
        <button onClick={() => bubbleSort(props.arr)}>Bubble Sort</button>
        <button onClick={() => selectionSort(props.arr)}>Selection Sort</button>
        <button onClick={() => insertionSort(props.arr)}>Insertion Sort</button>
        <button onClick={() => mergeSort(props.arr, 0, props.arr.length - 1)}>
          Merge Sort
        </button>
        {/* choose wich method will be tested */}
        <button onClick={() => testSortingAlgorithms(mergeSort)}>test</button>
      </div>
    </div>
  );
}