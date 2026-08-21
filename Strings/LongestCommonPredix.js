// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const LongestCommonPrefix = (strs) => {

    // 1st character of each letter Initializing with 0.
    let x = 0;
    while (x < strs[0].length) {

        // First letter of 1st string we will compare other strings with 1st one.
        let ch = strs[0][x]

        // Starting with 1 bcz 0th i.e. 1st string is a comparison string.
        for (let i = 1; i < strs.length; i++) {
            if (ch != strs[i][x] || x === strs[i].length) {
                return strs[0].slice(0, x);
            }
        }
        ++x;
    }
    return strs[0];

}
const result = LongestCommonPrefix(["flower", "flow", "flight"])
console.log("Longest Common Prefix : ", result)