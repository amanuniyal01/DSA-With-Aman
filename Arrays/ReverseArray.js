const ReverseArray = (arr) => {
    let n = arr.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let j = n - i - 1;
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}
const reuslt = ReverseArray([1, 2, 3, 4, 5])
console.log("Result : ", reuslt)