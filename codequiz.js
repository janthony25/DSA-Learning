// Palindrome
// 121
// -121
// 10

function isPalindrome(number) {
    if (number < 0 || (number % 10 === 0 && number !== 0)) return false;

    let reverse = 0;
    let original = number;

    while (number > 0) {
        reverse = reverse * 10 + (number % 10);
        number = Math.floor(number / 10);
    }

    return original === reverse;
}

console.log(isPalindrome(151))