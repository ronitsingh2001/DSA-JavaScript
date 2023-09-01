

function naiveString(str, s) {
    let count = 0;
    for (let i = 0; i < (str.length); i++) {
        for (let j = 0; j < s.length; j++) {
            if (str[i + j] !== s[j]) {
                break;
            }
            if (j === s.length - 1) count++
        }
    }
    return count;
}
// console.log(naiveString("omgomgmomgmomgomgomgomgomg", "omg"))


function maxProfit(arr) {
    let min = arr[0]
    let max = arr[arr.length - 1];
    let left = 1;
    let right = arr.length - 2;
    for (let i = 1; i < arr.length -1 && left<=right; i++) {
        if (min > arr[left]) {
            min = arr[left];
            left++;
        }
        if (max < arr[right]) {
            max = arr[right]
            right--
        }
    }

    return (max - min) < 0 ? 0 : max - min
}
console.log(
    maxProfit([3, 2, 6, 5, 0, 3])

)
// removeDuplicates([1,1,2])