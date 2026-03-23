// a="Hello world" Output=5 bcz world is last word
const LengthofLastWord = (str) => {
    let s = str.trim()
   s= s.split(" ")
    return s[s.length - 1].length

}
console.log(LengthofLastWord("aman Uniyal zoo    "))