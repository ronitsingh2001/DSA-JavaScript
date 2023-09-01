// ##This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
// ##This pattern can tremendously decrease time complexity

// ***************QUESTION***************
// Given a sorted array of integers, write a function
//  called search, that accepts a value and returns
//  the index where the value passed to the function
//  is located.If the value is not found, return -1
// ***************EXAMPLE***************
// console.log(
//     search([1, 2, 3, 4, 5, 6], 4), // 3
//     search([1, 2, 3, 4, 5, 6], 6),// 5
//     search([1, 2, 3, 4, 5, 6], 11),// -1
// )

function search(arr, n) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        const val = arr[middle];
        if (val === n) {
            return middle
        } else if (val < n) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return -1
}