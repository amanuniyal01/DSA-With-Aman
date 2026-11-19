// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9


const ReversePolishNotation = (arr) => {

    // To store numbers and intermediate results.
    let stack = []

    // Mapping operators to their respective functions.
    let map = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b)
    }

    for (let i = 0; i < arr.length; i++) {

        if (map[arr[i]]) {

            // First pop = second operand.
            const b = stack.pop()

            // Second pop = first operand.
            const a = stack.pop()

            // Perform the operation.
            const expression = map[arr[i]](a, b)

            // Push the result back.
            stack.push(expression)

        }
        else {
            stack.push(Number(arr[i]))
        }
    }

    return stack.pop()
}

console.log(
    "Reverse Polish Notation:",
    ReversePolishNotation(["4", "13", "5", "/", "+"])
)

console.log(
    "Reverse Polish Notation:",
    ReversePolishNotation(["2", "1", "+", "3", "*"])
)