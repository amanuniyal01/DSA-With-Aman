const Sum = (num) => {
    if (num < 1) {
        return
    }
    console.log(num)
    Sum(num - 1)

}
console.log(Sum(10))