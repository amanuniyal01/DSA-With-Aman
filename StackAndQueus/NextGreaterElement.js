
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

console.log("Next Greater Element : ", nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))