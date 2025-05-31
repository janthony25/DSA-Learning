const findFactorial = (n) => {
    let result = 1;

    for(let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(findFactorial(5));
