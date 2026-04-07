//  Input: jewels = "aA", stones = "aAAbbbb"   Output: 3 //aAA is present in stones

// Approach 1 - Brute Force approach using includes.
const JewelsandStones=(jewels,stones)=>{
    let count=0;
    for(let i=0;i<stones.length;i++){
        if(jewels.includes(stones[i])){
            count++;
        }
    }
    return count

}
console.log(JewelsandStones("aA","aAAbbbb"))