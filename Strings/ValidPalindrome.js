// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// EXTRA SPACE APPROACH.
const validPalindrome1 = (str) => {
    str = str.toLowerCase();
    let filteredString = '';
    let reverseString = '';
    // Remove all commas and alphanumeric characters
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z0-9]/i)) {
            filteredString += str[i];

            // aman= i=0 -> a rev = 'a'+''
            //aman = i=1 -> m rev =  'm'+'a'
            reverseString = str[i] + reverseString

        }
    }

    // const reverseString = filteredString.split("").reverse().join("");

    return reverseString == filteredString

}
// const res = validPalindrome1("A man, a plan, a canal: Panama");
// console.log(res)


// 2 POINTER APPROACH
const validPalindrome2 = (str) => {
    let n = str.length
    let i = 0;
    let j = n - 1
    str = str.toLowerCase();
    while (i < j) {
        if (!str[i].match(/[a-z0-9]/)) {
            i++;
        }
        else if (!str[j].match(/[a-z0-9]/)) {
            j--;
        }
        else if (str[i] == str[j]) {
            i++;
            j--;
        }
        else {
            return false
        }
    }
    return true
}
const res = validPalindrome2("A man, a plan, a canal: Panama");
console.log(res)