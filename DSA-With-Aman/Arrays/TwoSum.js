
// Using Two Loops(Basic Method)
// const TwoSum = (arr, target) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j]
//             }
//         }
//     }


// }
// console.log(TwoSum([2, 7, 11, 15], 9))
// console.log(TwoSum([3,2,4], 6))

// Using Maps[Optimized way]
const TwoSum = (arr, target) => {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i;
    }
    for (let i = 0; i < arr.length; i++) {
        let pairToFound = target - arr[i]
        if (map[pairToFound] && map[pairToFound] != i) {
            return [i, map[pairToFound]]
        }

    }

}
console.log(TwoSum([2,6,3,1,6,8],10))