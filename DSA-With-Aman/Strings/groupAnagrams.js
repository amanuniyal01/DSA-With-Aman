// Input: ["eat","tea","tan","ate","nat","bat"]

// Output:
// [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]

// const groupAnagrams = (strs) => {
//     let map = {}

//     for (let i = 0; i < strs.length; i++) {
//         let sortedStr = strs[i].split("").sort().join("")

//         if (!map[sortedStr]) {
//             map[sortedStr] = [strs[i]]  // store as array
//         } else {
//             map[sortedStr].push(strs[i])
//         }
//     }

//     return Object.values(map)
// };

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// let p = groupAnagrams(strs)
// console.log(p)

const groupAnagrams = (strs) => {
    let map = {};

    for (let i = 0; i < strs.length; i++) {
        let freqArr = new Array(26).fill(0);

        let s = strs[i];

        // Count characters
        for (let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            freqArr[index]++;
        }

        // Create key
        let key = "";
        for (let k = 0; k < 26; k++) {
            key += String.fromCharCode(k) + freqArr[k] ;
        }

        // Store in map
        if (!map[key]) {
            map[key] = [s];
        } else {
            map[key].push(s);
        }
    }

    return Object.values(map);
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));