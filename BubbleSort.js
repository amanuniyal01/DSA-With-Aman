

const BubbleSort = (arr) => {
    let n = arr.length - 1;
    // let i = 0;
    for (let i = 0; i < n; i++) {

        //Flag used to check a number is swapped or not.
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true;
                // i++;
            }
        }

        //If after 1 Round there's no element swapped so break the loop . Better for Optimization.
        if (!swapped) {
            break;
        }
    }
    return arr;

}

// Time Complexity
// Worst Case - 2 Loops - 0(n2)
//Best Case - 1 Loop Nothing Swapped - 0(n)

const result = BubbleSort([4, 2, 5, 1, 3])
console.log("Sorted Array : ", result)