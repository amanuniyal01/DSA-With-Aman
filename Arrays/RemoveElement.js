// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_] Remove 3(val)

const RemoveElement = (nums, val) => {
    let x = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[x] = nums[i]
            x += 1

        }
    }
    // return nums
    return x

}
console.log(RemoveElement([1, 2, 2, 3, 4, 5], 2))