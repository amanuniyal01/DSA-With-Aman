//arr =[4,2,5,3,1]

const SelectionSort = (arr) => {
    let n = arr.length;

    //Outer loop 
    for (let i = 0; i < n - 1; i++) {

        //Inside outer loop bcz i want min  to be reset after every outer set.
        let min = i
        for (let j = i; j < n; j++)

            //If i Finds smallest number then the min i have so far so just make the index of min to that number.
            if (arr[j] < arr[min]) {
                min = j;
            }

        //Swap the ith and min element.
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }

    return arr;
    //Time COMPLEXITY = O(n2)
}
let result = SelectionSort([2, 4, 3, 5, 1]);
console.log("Result :", result);