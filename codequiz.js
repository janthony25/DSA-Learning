
// Fibonacci Sequence (Nth Term)
// Input: n = 6
// Output: 8 (0, 1, 1, 2, 3, 5, 8)

function fibonacci(input) {
    let result = [0, 1];

    if (!input || typeof input !== 'number') {
        return "Please enter a valid input"
    }

    while(result.length <= input) {
        result.push(result[result.length - 1] + result[result.length - 2])
    }

    return result;
}

console.log(fibonacci(6))