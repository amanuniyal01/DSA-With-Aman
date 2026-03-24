// a="Hello world" Output=5 bcz world is last word
// Using Built in Functions(Not recommended for interviews.)
// const LengthofLastWord = (str) => {
//     let s = str.trim()
//    s= s.split(" ")
//     return s[s.length - 1].length

// }
// console.log(LengthofLastWord("aman Uniyal zoo    "))


// Approach -2 (Using Two Loops )
let LengthofLastWord = (str) => {
    let n = str.length - 1;

    // Step 1: skip trailing spaces
    while (n >= 0 && str[n] === " ") {
        n--;
    }

    // Step 2: count last word
    let count = 0;
    while (n >= 0 && str[n] !== " ") {
        count++;
        n--;
    }

    return count;
}

console.log(LengthofLastWord("    aman uniyal")); // 6

