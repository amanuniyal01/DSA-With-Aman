const ReverseInteger = (num) => {
    let numCopy = num;
    num = Math.abs(num)
    let rev = 0;
    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10)
    }
    return (numCopy < 0) ? (-rev) : (rev)

}
console.log(ReverseInteger(12345))
console.log(ReverseInteger(-12345))