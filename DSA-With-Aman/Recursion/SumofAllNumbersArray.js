
let arr = [1, 2, 3, 4, 5]
const SumofAllNumbers = (n) => {
    if (n === 0) return arr[n];
    return arr[n] + SumofAllNumbers(n - 1)




}
console.log(SumofAllNumbers(arr.length - 1))


// Sum of odd Numbers in an Array
let arr2 = [1, 2, 3, 4, 5, 6]

const OddSum = (n) => {
    if (n < 0) return 0;

    const isOdd = arr2[n] % 2 !== 0;

    if (isOdd) {
        return arr2[n] + OddSum(n - 1);
    } else {
        return OddSum(n - 1);
    }
}

console.log(OddSum(arr2.length - 1));