
const parMap = {
    ")": "(",
    "}": "{",
    "]": '['
};

const validParenthesis = (str) => {
    let stack = []
    let n = str.length;
    for (let i = 0; i < n; i++) {
        if (parMap[str[i]]) {
            let popElement = stack.pop()

            if (popElement !== parMap[str[i]]) {
                return false
            }
        }
        else {
            stack.push(str[i])
        }
    }
    return stack.length === 0;
}
var result = validParenthesis("()[]{}")
console.log("valid parenthesis", result)