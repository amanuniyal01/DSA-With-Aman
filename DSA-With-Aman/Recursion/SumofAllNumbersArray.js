
let arr = [1, 2, 3, 4, 5]
const SumofAllNumbers = (n) => {
    if (n === 0) return arr[n];
    return arr[n] + SumofAllNumbers(n - 1)




}
console.log(SumofAllNumbers(arr.length - 1))