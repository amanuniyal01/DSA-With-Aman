const SingleNumber = (arr) => {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i]
    }
    return xor


}
console.log(SingleNumber([1, 1, 2, 2, 3, 4, 4, 5, 5]))