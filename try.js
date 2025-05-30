function isPalindrome(n) {
    if (n < 0) return false;

    let original = n;
    let reversed = 0;

    while(n > 0) {
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }

    return reversed === original;
}

console.log(isPalindrome(1241));