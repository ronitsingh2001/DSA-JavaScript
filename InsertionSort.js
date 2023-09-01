// INSERTION SORT -> builds up the sort by gradually creating a 
//                  larger left half which is actually sorted..

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (var j = i - 1; j >= 0 && arr[j] > arr[i]; j--) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            break;
        }
    }

    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));