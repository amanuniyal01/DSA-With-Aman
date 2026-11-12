
const RemoveOutermostParenthesisUsingStack = (string) => {

    //Always First Character will be a opening Outermost parenthesis. So initializing with first character.
    let stack = [string[0]];
    let ans = "";

    for (let i = 1; i < string.length; i++) {

        // If Character is Opening Bracket. Push it Into Stack.
        if (string[i] === "(") {
            stack.push(string[i]);

            //Check if length is greater then 1 then add it into ans.
            if (stack.length > 1) {
                ans += string[i];
            }

            // If Character is Closing Bracket. Push it Into Stack.
        } else {

            //If length of stack is greater then 1. Then add it into ans.
            if (stack.length > 1) {
                ans += string[i];
            }

            //Push out of the Stack.
            stack.pop();
        }
    }

    return ans;
};


// WITHOUT USING STACK.
const RemoveOutermostParenthesWithoutStack = (string) => {
    let level = 0;
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            ++level;
            if (level > 1) {
                ans = ans + s[i];
            }
        } else {
            if (level > 1) {
                ans = ans + s[i];
            }
            --level;
        }
    }
}

let result = RemoveOutermostParenthesisUsingStack("(()())(())");
console.log(result);

