const MoveZeroes = (arr) => {
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[zero], arr[i]] = [arr[i], arr[zero]]
            zero++;

        }
    }
    return arr

}
console.log(MoveZeroes([0, 2, 3, 0, 0, 6]))