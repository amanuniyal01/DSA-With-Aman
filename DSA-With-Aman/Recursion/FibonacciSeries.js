// NORMAL METHOD....
const FibonacciSeries = (num) => {
    if (num <= 0) return [];
    if (num === 1) return [0]
    let arr = [0, 1]
    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 1] + arr[i - 2])

    }
    return arr
}
console.log(FibonacciSeries(5))

// RECURSION
const RecursiveApproach = (num) => {
    if (num <= 1) return num;
    return RecursiveApproach(num - 1) + RecursiveApproach(num - 2)

}
console.log(RecursiveApproach(5))