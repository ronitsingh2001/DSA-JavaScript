// ****************Frequency Counter********************
// Write a function called same, which accepts two arrays.
//  The function should return true if every value in the array
//   has it's corresponding value squared in the second array.
//   The frequency of values must be the same.
// ****************EXAMPLES**********************
// console.log(same([1, 2, 3], [4, 1, 9])) // true
// console.log(same([1,2,3], [1,9])) // false
// console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)
// **************SOLUTION*****************************

function same(arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = frequencyCounter1[val] ? ++frequencyCounter1[val] : 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = frequencyCounter2[val] ? ++frequencyCounter2[val] : 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) return false;
        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
    }
    return true
}