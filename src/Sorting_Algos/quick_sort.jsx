const QuickSort = (arr) => {
  function swap(auxiliaryArray, firstIdx, secondIdx) {
    let temp = auxiliaryArray[firstIdx];
    auxiliaryArray[firstIdx] = auxiliaryArray[secondIdx]; // instead of swapping we are overwriting values
    auxiliaryArray[secondIdx] = temp;
  }

function partition(arr, low, high) {
    let pivot = high;
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        animations.push([j,pivot]);
        animations.push([j,pivot]);
        if (arr[j] < arr[pivot]) {
            i++;
            animations.push([i,arr[j]]);
            animations.push([j,arr[i]]);
            swap(arr,i,j);
        }
        else{
            animations.push([-1,-1]);
            animations.push([-1,-1]);
        }
    }
    
    animations.push([-1,-1]);
    animations.push([-1,-1]);
    animations.push([i+1,arr[high]]);
    animations.push([high, arr[i+1]]);
    swap(arr,i+1,high)
    return i + 1; 
}

function quickSort(arr, low, high) {
    if (low < high) {
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
    }
}
let animations = [];
let N = arr.length;
quickSort(arr, 0, N - 1);
console.log(arr);
return animations;
};

export default QuickSort;
