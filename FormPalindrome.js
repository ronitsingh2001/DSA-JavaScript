function canFormPalindrome(str) {
    let map = {};

    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }
    let oddCount = 0;
    for (let val in map) {
        if (map[val] % 2 !== 0)
            oddCount++;
    }
    return oddCount < 2;
}

console.log(
    canFormPalindrome("abcca")
);