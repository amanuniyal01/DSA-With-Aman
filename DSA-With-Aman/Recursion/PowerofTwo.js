// Normal Method
const PowerofTwo = (num) => {
    if (num <= 0) return false;
    while (num % 2 === 0) {
        num = num / 2
    }
    return num === 1


}
console.log(PowerofTwo(16))

// RECURSION
const Poweroftwo = (n) => {
    if (n === 1) return true;
    else if (n < 1 || (n % 2 != 0)) {
        return false;
    }
    return Poweroftwo(n / 2)


}
console.log(Poweroftwo(26))