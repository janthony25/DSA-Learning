

// Check for Palindrome
// Input: "racecar"
// Output: true

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--;
        }
        else{
            return false;
        }
    }

    return true;

}

console.log(isPalindrome("racecar"))