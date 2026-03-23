const ReverseString = (s) => {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
};

let arr = ["h", "e", "l", "l", "o"];

ReverseString(arr);

console.log(arr);


// Q2
const reverseEachWord = (str) => {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
};

console.log(reverseEachWord("I love Js")) // "I evol sJ"

// Q 3
const reverseWords = (str) => {
    return str.split(" ").reverse().join(" ");
};
console.log(reverseWords("I love Js")) //Js love I