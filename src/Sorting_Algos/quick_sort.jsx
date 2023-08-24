const QuickSort = (arr) => {
  function swap(newArr, a, b) {
    let temp = newArr[a];
    newArr[a] = newArr[b];
    newArr[b] = temp;
  }

  function find_pivot(newArr, s, e) {
    let pivot = s;
    let count = 0;
    for (let i = s + 1; i <= e; i++) {
        animations.push([i,pivot]);
        animations.push([i,pivot]);
        if (newArr[i] <= newArr[pivot]) {
            count++;
        }
        if(i != e){
            animations.push([-1,-1]);
            animations.push([-1,-1]);
        }
    }
    animations.push([pivot, newArr[pivot + count]]); // [height swap]
    animations.push([pivot+count, newArr[pivot]]);
    swap(newArr, pivot, pivot + count);
    pivot = pivot + count;

    let left_idx = s;
    let right_idx = e;
    while (left_idx < pivot && right_idx > pivot) {
        if (newArr[left_idx] < newArr[pivot]) {
            animations.push([left_idx, pivot]);   // aabb  push elements in format aabb
            animations.push([left_idx, pivot]);
            animations.push([-1, -1]);
            animations.push([-1, -1]);
            left_idx++;
        } else if (newArr[right_idx] > newArr[pivot]) {  // aabb
            animations.push([right_idx, pivot]);
            animations.push([right_idx, pivot]);
            animations.push([-1, -1]);
            animations.push([-1, -1]);
            right_idx--;
        } 
        else {
            animations.push([-1, -1]);
            animations.push([-1, -1]);
            animations.push([left_idx, newArr[right_idx]]); // aabb  [height swap]
            animations.push([right_idx, newArr[left_idx]]);
            swap(newArr, left_idx, right_idx);
            left_idx++;
            right_idx--;
        }
    }
    return pivot;
  }

  function quickSort(newArr, s, e) {
    if (s >= e) {
      return;
    }
    let p = find_pivot(newArr, s, e);
    quickSort(newArr, s, p - 1);
    quickSort(newArr, p + 1, e);
  }

  let animations = [];
  let newArr = [...arr];
  let N = newArr.length;
  quickSort(newArr, 0, N - 1);
  console.log(newArr);
  return animations;
};

export default QuickSort;
