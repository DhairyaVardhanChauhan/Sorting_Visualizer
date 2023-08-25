const Insertion = (arr) => {
    function insertionSort(arr, n) {
        let i, key, j;
        for (i = 1; i < n; i++) {
            key = arr[i]; // Store the current value being sorted
            j = i - 1;
            while (j >= 0 && arr[j] > key) {
                animation.push([j + 1, arr[j]]);
                animation.push([j,arr[j+1]]);
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            animation.push([j + 1, key]); 
            arr[j + 1] = key; 
        }
    }

    const animation = [];
    let newArr = [...arr];
    const  n = newArr.length;
    insertionSort(newArr,n)
    console.log(newArr);
    return animation;
}
export default Insertion