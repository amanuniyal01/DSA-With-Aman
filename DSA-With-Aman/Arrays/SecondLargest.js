const SecondLargest = (arr) => {
    let largest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        }
        else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

let arr = [1, 2, 3, 4, 5]
console.log(SecondLargest(arr))
