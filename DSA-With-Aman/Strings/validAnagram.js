// anagram =nagaram  aman=mana Word should contain in both strings...
// BY using sort..
const validAnagram = (s1, s2) => {
    return s1.split("").sort().join("") === s2.split("").sort().join("")

}
console.log(validAnagram("Aman", "Amman"))

// 

const validAnagram2 = (s1, s2) => {
    let map = {};
    for (let i = 0; i < s1.length; i++) {
        if (!map[s1[i]]) {
            map[s1[i]] = 1;

        }
        else {
            ++map[s1[i]];
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (!map[s2[i]] || map[s2[i]] < 0) {
            return false
        }
        else {
            --map[s2[i]]
        }
    }
    return true;

}
console.log(validAnagram2("aman","nama"))

// Optimized Approach