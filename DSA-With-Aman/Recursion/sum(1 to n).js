const printNumbers = (n) => {
    if (n === 0) return;   // Base case

    printNumbers(n - 1);   
    console.log(n);        // Print after recursion
};

printNumbers(5);