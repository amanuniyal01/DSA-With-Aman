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
const res = validPalindrome1("A man, a plan, a canal: Panama");
console.log(res)