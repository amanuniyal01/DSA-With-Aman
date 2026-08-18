// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"


// Solution

const ReverseString2 = (str, k) => {

    str = str.split("");
    for (let x = 0; x < str.length; x = x + (2 * k)) {
        let n = k
        let middle = Math.floor(n / 2)
        for (let i = 0; i < middle; i++) {
            let temp = str[x + i]
            str[x + i] = str[x + n - i - 1]
            str[x + n - i - 1] = temp
        }
    }
    str = str.join("")
    return str;
}
const result = ReverseString2("abcdefg", 2)
console.log('Reverse', result)