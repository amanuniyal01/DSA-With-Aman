//  words = Input: ["leet","code"], x = "e"   Output: [0,1]

// By using Built in method(includes)
const WordsContainingCharacters = (arr,x) => { 
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].includes(x)){
            res.push(i)
        }
    }
    return res;
}
console.log(WordsContainingCharacters(["leet","code"],"e"))