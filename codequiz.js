// Factorial
// 5! = 5 * 4 * 3 * 2 * 1
// 120

function findFactorial(number) {

    let result = 1;

    for (let i = number; i > 1; i--) {
        result *= i;
    }

    return result;
}

console.log(findFactorial(5))
/* 






*/