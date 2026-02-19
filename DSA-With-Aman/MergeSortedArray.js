const MergeSortedArray = () => {
    const arr1 = [1, 2, 3, 0, 0, 0]
    const arr2 = [4, 5, 6]

    let m = 3; 
    let n = arr2.length;

    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) break;

        if (p1 >= 0 && arr1[p1] > arr2[p2]) {
            arr1[i] = arr1[p1];
            p1--;
        } else {
            arr1[i] = arr2[p2];
            p2--;
        }
    }

    return arr1;
}

console.log(MergeSortedArray());
