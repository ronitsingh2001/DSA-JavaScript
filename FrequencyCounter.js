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

// ***************QUESTION***********
// Given two strings, write a function to determine if the
// second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the
// letters of another, such as cinema, formed from iceman.
// *************EXAMPLES**************
// console.log(validAnagram('', '')) // true
// console.log(anagram('aaz', 'zza')) // false
// console.log(anagram('anagram', 'nagaram')) // true
// console.log(anagram("rat","car")) // false) // false
// console.log(anagram('awesome', 'awesom')) // false
// console.log(anagram('qwerty', 'qeywrt')) // true
// console.log(anagram('texttwisttime', 'timetwisttext')) // true

function anagram(s, t) {
    if (s.length !== t.length) {
        return false
    }
    let map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? ++map[s[i]] : 1;
    }
    for (let i = 0; i < t.length; i++) {
        let letter = t[i];
        if (!map[letter]) {
            return false
        } else {
            --map[letter];
        }

    }
    return true
}


