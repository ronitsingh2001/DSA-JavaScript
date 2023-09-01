function bubbleSort(arr) {
    var noSwap;
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwap = true;
        for (let j = 0; j < i; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([1, 2, 3, 4,9, 5,]))