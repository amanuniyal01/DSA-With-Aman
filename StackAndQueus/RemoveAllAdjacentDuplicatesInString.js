// Remove All Adjacent Duplicates In String
// Input: s = "abbaca"
// Output: "ca"

const RemoveAllAdjacentDuplicates = (str) => {

    let stack = []

    // String to Store Result
    let result = ""

    for (let i = 0; i < str.length; i++) {

        //Get the last Element Bcz Stack Follows LIFO.
        let peekElement = stack[stack.length - 1]

        //If curr Element is Equal to the last Inserted Element Then Only just pop Bcz then only its adjacent.
        if (str[i] == peekElement) {
            stack.pop()
        }

        //Otherwise Push it into Stack.
        else {
            stack.push(str[i])
        }
    }

    //Now Convert this arr into string
    for (let i = 0; i < stack.length; i++) {
        result += stack[i]
    }

    return result;
}


let result = RemoveAllAdjacentDuplicates("abbaca")
console.log(result)