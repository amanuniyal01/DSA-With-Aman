
let count = 0;
const CountDigit = (num) => {
    if (num === 0) return 1
    if (num < 0) {
        num= num * (-1)
    }
    while (num > 0) {
        num = Math.floor(num / 10);
        count++
    }
    return count

}
let result = CountDigit(-7685)
console.log(result)
