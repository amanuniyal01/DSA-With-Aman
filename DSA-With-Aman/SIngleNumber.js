const SingleNumber = (num) => {
    let hash = {};

    // Build frequency map
    for (let i = 0; i < num.length; i++) {
        if (!hash[num[i]]) {
            hash[num[i]] = 1;
        } else {
            hash[num[i]]++;
        }
    }

    // Find element with frequency 1
    for (let i = 0; i < num.length; i++) {
        if (hash[num[i]] === 1) {
            return num[i];
        }
    }
};

console.log(SingleNumber([1, 1, 2, 2, 3, 3, 4, 5, 5]));