const MergeSort = (arr) => {

    if (arr.length <= 1) return arr

    let middle = Math.floor(arr.length / 2)

    let left = MergeSort(arr.slice(0, middle))
    let right = MergeSort(arr.slice(middle))

    return merge(left, right)
}

const merge = (left, right) => {

    let i = 0
    let j = 0
    let result = []

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }

    }

    return [...result, ...left.slice(i), ...right.slice(j)]
}

console.log(MergeSort([5,3,8,4,2]))