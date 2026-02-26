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