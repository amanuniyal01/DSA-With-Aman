// First get Actual Sum by formula :n(n+1)/2 and then Get the currSum After that just return Actual-Curr...

const MissingNumber = (nums) => {
    let n = nums.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let num of nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
}

console.log(MissingNumber([1, 2, 3, 4, 6]));