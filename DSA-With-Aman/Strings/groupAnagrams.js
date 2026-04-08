// Input: ["eat","tea","tan","ate","nat","bat"]

// Output:
// [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]

const groupAnagrams = (strs) => {
    let map = {}

    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split("").sort().join("")

        if (!map[sortedStr]) {
            map[sortedStr] = [strs[i]]  // store as array
        } else {
            map[sortedStr].push(strs[i])
        }
    }

    return Object.values(map)
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
let p = groupAnagrams(strs)
console.log(p)