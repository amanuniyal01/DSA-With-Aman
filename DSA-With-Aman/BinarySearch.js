// nums=[1,2,3,4,5,6,7] target=5
const BinarySearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor(right + left) / 2
        if (target === nums[middle]) {
            return middle
        }
        else if (target > nums[middle]) {
            left = middle + 1
        }
        else {
            right = middle - 1
        }
    }
    return -1

}
console.log(BinarySearch([1,2,3,4,5,6,7],5))