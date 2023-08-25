import { useEffect, useState } from "react";
import "./SortingVisualizer.css";
import getMerge from "../Sorting_Algos/merge_sort";
import bubble_sort from "../Sorting_Algos/bubble_sort";
import QuickSort from "../Sorting_Algos/quick_sort";
import Insertion from "../Sorting_Algos/Insertion";

const SortingVisualizer = () => {
  const randomIntFromIntervals = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleMerge = (arr, setArr, animationSpeed) => {
    getMerge(arr, setArr, animationSpeed);
  };

  const handleBubble = (arr, setArr, animationSpeed) => {
    // really simple just have to handle the animation noting more
    const animation = bubble_sort(arr, setArr);
    for (let i = 0; i < animation.length; i++) {
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      const arrayBars = document.querySelectorAll(".array-bar");
      if (isColorChange === true) {
        const color = i % 4 === 0 ? "red" : "pink"; // case 1 since we know [compareIdx,compareIdx,swapIdx,swapIdx]
        const [barOneIdx, barTwoIdx] = animation[i]; // the structure of compare idx is [idx1,idx2] so we highlight the idx with red
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        const [barIdx, newHeight] = animation[i]; // the structure of swapIdx is [idx1,value]
        console.log(barIdx, newHeight);
        if (barIdx === -1) {
          continue;
        }
        const barStyle = arrayBars[barIdx].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };


  const handleQuick = (arr, setArr, animationSpeed) => {
    const animation = QuickSort(arr);
    console.log(animation);
    for(let i = 0;i<animation.length;i++){
      let isColorChange = i%4 == 0 || i%4 == 1;
      const arrayBars = document.querySelectorAll(".array-bar");
      if(isColorChange === true){
        const color = i%4 === 0? "red":"pink";
        const [barOneIdx,barTwoIdx] = animation[i];
        if(barOneIdx === -1){
          continue;
        }
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      }
      else{
          const [barIdx,newHeight] = animation[i];
          if(barIdx === -1){
            continue;
          }
          const barOneStyle = arrayBars[barIdx].style;
          setTimeout(()=>{
            
            barOneStyle.height = `${newHeight}px`;
          },i*animationSpeed)
      }
    }
  };

  const handleInsertion = (arr,setArr,animationSpeed) =>{
      const animation = Insertion(arr);
      const arrayBars = document.querySelectorAll(".array-bar");
      for (let i = 0; i < animation.length; i++) {
          const [barIdx, newHeight] = animation[i];
          const barOneStyle = arrayBars[barIdx].style;
          setTimeout(() => {
            barOneStyle.height = `${newHeight}px`;
          }, i * animationSpeed);
      }
  }

  const [size, setSize] = useState(10);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const createArray = () => {
    const arr = [];

    for (let i = 0; i < Number(size); i++) {
      arr.push(randomIntFromIntervals(5, 500));
    }
    return arr;
  };
  useEffect(() => {
    setArr(createArray());
  }, [size]);

  const [arr, setArr] = useState(createArray());
  return (
    <>
      <nav className="nav">
        <div className="animation-div">
          <input
            className="slider-size"
            type="range"
            min="1"
            max="1000"
            value={animationSpeed}
            onChange={(e) => {
              setAnimationSpeed(e.target.value);
            }}
          />
          <div className="speed-toolTip">{animationSpeed/1000}</div>
        </div>
        <div className="animation-div">
          <input
            className="slider-size"
            type="range"
            min="5"
            max="100"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
          <div className="speed-toolTip">{size}</div>
        </div>
        <button
          className="sort-btn"
          onClick={() => {
            handleMerge(arr, setArr, animationSpeed);
          }}
        >
          Merge Sort
        </button>
        <button
          className="sort-btn"
          onClick={() => {
            handleBubble(arr, setArr, animationSpeed);
          }}
        >
          Bubble Sort
        </button>
        <button
          className="sort-btn"
          onClick={() => {
            handleQuick(arr, setArr, animationSpeed);
          }}
        >
          Quick Sort
        </button>
        <button
          className="sort-btn"
          onClick={() => {
            handleInsertion(arr, setArr, animationSpeed);
          }}
        >
          Insertion Sort
        </button>
        <button
          className="sort-btn"
          onClick={() => {
            setArr(createArray());
          }}
        >
          Shuffle
        </button>
      </nav>
      <div className="array-container">
        {arr.map((value, idx) => {
          return (
            <div
              className="array-bar"
              style={{ height: `${value}px`, width: "100px" }}
              key={idx}
            >
              <h4 style={{ fontSize: "6px" }} className="number-header"></h4>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default SortingVisualizer;
