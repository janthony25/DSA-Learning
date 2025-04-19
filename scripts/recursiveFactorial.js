// Write two functions that finds the factorial of any
// number. One should use recursive, the other should just 
// use for loop;


// Factorial
// 5! = 5 * 4 * 3 * 2 * 1

function findFactorialRecursive(number) {
    //code here
    if (number === 2) {
        return 2;
    };

    return number * findFactorialIterative(number - 1);

}

function findFactorialIterative(number) {
   let answer = 1;

   if(number === 2) {
    return 2;
   }

   for (let i = 2; i <= number; i++) {
        answer *= i;
   }

   return answer;
}

console.log(findFactorialRecursive(5))