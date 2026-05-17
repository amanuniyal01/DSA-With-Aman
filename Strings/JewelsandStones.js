//  Input: jewels = "aA", stones = "aAAbbbb"   Output: 3 //aAA is present in stones

// Approach 1 - Brute Force approach using includes.
// const JewelsandStones=(jewels,stones)=>{
//     let count=0;
//     for(let i=0;i<stones.length;i++){
//         if(jewels.includes(stones[i])){
//             count++;
//         }
//     }
//     return count

// }
// console.log(JewelsandStones("aA","aAAbbbb"))



// Approach 2 - Brute force without using includes.
const JewelsandStones = (jewels, stones) => {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) {
                count++;
                break;
            }
        }
    }
    return count

}
console.log(JewelsandStones("aA", "aAAbbbb"))


// Optimized approach(Using Set)
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    let set = new Set(jewels);

    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) {
            count++;
        }
    }

    return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));