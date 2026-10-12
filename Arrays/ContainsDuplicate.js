// Input: nums = [1,2,3,1] Output: true

const ContainsDuplicate = (arr) => {

    let map = {}
    for (let i = 0; i < arr.length; i++) {

        if (map[arr[i]] === 1) {
            return true
        }
        map[arr[i]] = 1
    }
    return false
}

var result = ContainsDuplicate([1, 2, 3, 1])
console.log(result)