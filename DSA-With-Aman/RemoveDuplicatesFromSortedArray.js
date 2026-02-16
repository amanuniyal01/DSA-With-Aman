// Return unique elements and remove duplicates
//  Ex: [1,2,2,3,4,4,5] should return K=5(unique elements) and [1,2,3,4,5,..]

const RemoveDuplicates = (arr) => {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        // It is for non decreasing for non increasing (arr[x]>arr[i])
        if (arr[x] < arr[i]) {

            x = x + 1
            arr[x] = arr[i]
        }
    }
    return x + 1
    return arr[x]

}

console.log(RemoveDuplicates([1, 2, 2, 3, 3, 4, 4, 5]))
// console.log(RemoveDuplicates([5,4,4,3,3,2,2,1]))