// MERGE SORT -> combination of spliting up, sorting and merging
//          uses divide N conquer aproach


function mergeSort() {



}

function merge(arr1, arr2) {
    let arr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        console.log(i, j);
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        arr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}

console.log(merge([1, 2, 3, 9, 11], [2, 4, 5, 6, 7]));