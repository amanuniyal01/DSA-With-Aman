
// const nums1 = [4, 1, 2];
// const nums2 = [1, 3, 4, 2];

// Output: [-1,3,-1]

//Using Brute Force Approach

const nextGreaterElement = (nums1, nums2) => {

    //Array to store Result.
    let result = [];

    //Outer loop will run nums1.lenght times i.e. 3 times.
    for (let i = 0; i < nums1.length; i++) {

        //Inner loop will run nums2.lenght times i.e. to Iterate over 2nd array one by one.
        for (let j = 0; j < nums2.length; j++) {

            //If the element in 1st arr is equals to element in 2nd arr.
            if (nums1[i] === nums2[j]) {

                //Intitalize a flag that will tells that do we found a greater number or not.
                let found = false;

                //Run a loop from the next ele of current to nums2.length.
                for (let k = j + 1; k < nums2.length; k++) {

                    //If we find a number greater then the current. Push it to result , make found true and break the loop.
                    if (nums2[k] > nums2[j]) {
                        result.push(nums2[k])
                        found = true
                        break;
                    }
                }

                if (!found) {
                    result.push(-1)
                }
                break;
            }

        }
    }
    return result;
}
// console.log("Next Greater Element : ", nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))


const nextGreaterElementOptimized = (nums1, nums2) => {

    // Store each number and its next greater element.
    let map = {};

    // Stack to store potential next greater elements.
    let stack = [];

    // Traverse nums2 from right to left.
    for (let i = nums2.length - 1; i >= 0; i--) {

        let current = nums2[i];

        // Remove all smaller or equal elements.
        while (stack.length && stack[stack.length - 1] <= current) {
            stack.pop();
        }

        // If stack is empty, no greater element exists.
        if (stack.length === 0) {
            map[current] = -1;
        }
        else {
            map[current] = stack[stack.length - 1];
        }

        // Push current element into stack.
        stack.push(current);
    }

    // Retrieve answers for nums1.
    return nums1.map(x => map[x]);
};

console.log(
    nextGreaterElementOptimized([4, 1, 2], [1, 3, 4, 2])
);

