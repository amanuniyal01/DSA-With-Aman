// const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// Output: [1,1,4,2,1,1,0,0]

// Need to find warmer temp.

const dailyTemperatures = (temperatures) => {

    // Array to store the result.
    let answer = [];

    // Outer loop: Iterate over every day.
    for (let i = 0; i < temperatures.length; i++) {

        // Initially assume no warmer temperature exists.
        answer[i] = 0;

        // Inner loop: Check upcoming days.
        for (let j = i + 1; j < temperatures.length; j++) {

            // Check if upcoming temperature is warmer.
            if (temperatures[j] > temperatures[i]) {

                // Calculate days to wait.
                answer[i] = j - i;

                // We found the first warmer temperature.
                break;
            }
        }
    }

    return answer;
};

const dailyTemperaturesOptimized = (temperatures) => {

    let stack = [];

    let n = temperatures.length;

    let answer = Array(n).fill(0);

    stack.push(n - 1);

    for (let i = n - 2; i >= 0; i--) {

        // Remove elements that are not warmer.
        while (
            stack.length > 0 &&
            temperatures[i] >= temperatures[stack[stack.length - 1]]
        ) {
            stack.pop();
        }

        // If a warmer day exists.
        if (stack.length > 0) {
            answer[i] = stack[stack.length - 1] - i;
        }

        // Push current index.
        stack.push(i);
    }

    return answer;
};
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperaturesOptimized([30, 40, 50, 60]));
