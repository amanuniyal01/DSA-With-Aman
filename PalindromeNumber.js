var isPalindrome = function (x) {
    if (x < 0) return false;

    let original = x;
    let rev = 0;

    while (x > 0) {
        let digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === rev;
};
console.log(isPalindrome(1212132))
console.log(isPalindrome(1222221))