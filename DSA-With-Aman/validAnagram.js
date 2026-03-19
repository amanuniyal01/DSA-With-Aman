// anagram =nagaram  aman=mana Word should contain in both strings...
const validAnagram = (s1, s2) => {
    return s1.split("").sort().join("") === s2.split("").sort().join("")

}
console.log(validAnagram("Aman","Amman"))