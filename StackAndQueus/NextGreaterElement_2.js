
// Given a circular integer array nums 
// (i.e., the next element of nums[nums.length - 1] is nums[0]),
// return the next greater number for every element in nums.

//Input: nums = [1,2,1]   Output: [2,-1,2]

//arr =[1,2,1,1,2,1]
//stack =[1]
// ans =[-1,-1,-1,-1,-1,-1]

//i=n-2
// stack.length> 0 ? yes
// (curr element)2 > 1(topOfStack) => yes , pop() => stack=[] 
// i =n-3  => 1 > 1 => No  


//Using Doubling the length of array.
const NextGreaterelementII = (nums) => {

    //Double the array
    let arr = [...nums, ...nums];
    let n = arr.length;
    let ans = Array(n).fill(-1);
    let stack = []

    stack.push(arr[n - 1])

    for (let i = n - 2; i >= 0; i--) {

        while (stack.length) {
            if (arr[i] < stack[stack.length - 1]) {
                ans[i] = stack[stack.length - 1]
                break;
            }

            else {
                stack.pop()
            }
        }

        //Although not needed bcz array already fills up with -1.

        if (stack.length === 0) {
            ans[i] = -1
        }

        stack.push(arr[i])
    }
    return ans.splice(0, n / 2)

}

console.log(NextGreaterelementII([1, 2, 1]))