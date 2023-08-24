import { useEffect } from "react";

const bubble_sort = (arr,setArr) => {

    let animations = [];
    let auxiliaryArray = arr.slice();
    BubbleSort(auxiliaryArray,animations);
    return animations;

    function BubbleSort(auxiliaryArray,animations){
      const N = auxiliaryArray.length;
      for(let i = 0;i<N-1;i++){
        for(let j = 0;j<N-i-1;j++){
        animations.push([j,j+1]);
        animations.push([j,j+1]);
        if(auxiliaryArray[j]>auxiliaryArray[j+1]){
          animations.push([j,auxiliaryArray[j+1]]);   // phale baari me first bar ki height second ke barabar
          animations.push([j+1,auxiliaryArray[j]]);   // second baari me second bar ki height first ke barabar
          swap(auxiliaryArray,j,j+1);
        }else{
          animations.push([-1,-1]);
          animations.push([-1,-1]);
        }
      }
      }
    }

    function swap(auxiliaryArray,firstIdx,secondIdx){
      let temp  = auxiliaryArray[firstIdx];
      auxiliaryArray[firstIdx] = auxiliaryArray[secondIdx];  // instead of swapping we are overwriting values
      auxiliaryArray[secondIdx] = temp;
    }

}
export default bubble_sort