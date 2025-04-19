// Given a number N return the index value of the Fibonacci
// sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// the pattern of the sequence is that each value is the sum of
// the 2 previous values, that means that for N=5 -> 2 + 3


function fibonacciIterative(n) {
    // returns value of index
    // const array = [0,1];

    // for (let i =2; i <= n; i++) {
    //     array.push(array[i - 1] + array[i -2]);
    // }

    // return array[n];

    // returns array
    const array = [0, 1];

    for (let i = 2; i <= n; i++) {
        array.push(array[i -1] + array[i -2]);
    }
    return array;
}

console.log(fibonacciIterative(8))

function fibonacciIterativeRecursive(n) {
    if (n < 2) {
        return n;
    }

    return fibonacciIterativeRecursive(n -1) + fibonacciIterativeRecursive(n -2);
}
// console.log(fibonacciIterativeRecursive(8))