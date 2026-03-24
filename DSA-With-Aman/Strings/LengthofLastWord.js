// a="Hello world" Output=5 bcz world is last word
// Using Built in Functions(Not recommended for interviews.)
// const LengthofLastWord = (str) => {
//     let s = str.trim()
//    s= s.split(" ")
//     return s[s.length - 1].length

// }
// console.log(LengthofLastWord("aman Uniyal zoo    "))


// Approach -2 (Using Loops)
const LengthofLastWord = (str) => {
    let word = str.trim();
    let count = 0;

    for (let i = word.length - 1; i >= 0; i--) {
        if (word[i] === " ") {
            break;
        }
        count++;
    }

    return count;
}
console.log(LengthofLastWord("      aman uniyal is a good boy"))