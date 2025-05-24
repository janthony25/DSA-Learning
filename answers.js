// ------------------------------------------------------ //
// ------------------------------------------------------ //
// # Fibonacci
// ------------------------------------------------------ //

// Given number N return the index value of the Fibonacci
// sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// the pattern of the sequence is that each value is the 
// sum of the 2 previous values, that means for N= 5 -> 2 + 3
function fibonacci(n) {
    let array = [0, 1];

    for (let i = 2; i <= n; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    console.log(array)
    return array[n]
}

console.log(fibonacci(5))

// ------------------------------------------------------ //
// ------------------------------------------------------ //



// ------------------------------------------------------ //
// ------------------------------------------------------ //
// # Factorial
// ------------------------------------------------------ //

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

// ------------------------------------------------------ //
// ------------------------------------------------------ //



// ------------------------------------------------------ //
// ------------------------------------------------------ //
// # First recurring number
// ------------------------------------------------------ //

//     Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//     It should return 2

//     Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//     It should return 1

//     Given an array = [2, 3, 4, 5]
//     It should return undefined"""


function firstRecurring(array) {
    const map = {};

    for(let i = 0;i < array.length; i++) {
        const char = array[i];

       if(map[char] !== undefined) {
        return char
       }
        map[array[i]] = i
       
    }

    return undefined;
}


// ------------------------------------------------------ //
// ------------------------------------------------------ //


// ------------------------------------------------------ //
// ------------------------------------------------------ //
// # Title
// ------------------------------------------------------ //