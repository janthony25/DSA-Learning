// Fibonacci Sequence (Nth Term)
// Input: n = 6
// Output: 8 (0, 1, 1, 2, 3, 5, 8)

function fibonacci(n) {
    let array = [0, 1];

    for (let i = 2; i <= n; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    console.log(array)
    return array[n]
}

console.log(fibonacci(5))
/* 


if : 3

[0, 1]

result.length - 1  == 1
result.length - 2  == 0






*/