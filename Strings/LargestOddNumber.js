// Input: num = "35427" Output: "35427" if there is no odd number just return empty string.

const LargestOddNumber = (str) => {
    let n = str.length - 1;
    while (n >= 0) {
        if (str[n] % 2 === 1) {  // if it is odd
            return str.substring(0, n + 1)

        }
        else {
            n--;
        }



    }
    return ""


}
console.log(LargestOddNumber("35427"))
console.log(LargestOddNumber(""))
console.log(LargestOddNumber("52"))