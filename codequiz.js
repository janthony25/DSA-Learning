
// Reverse a String
// Input: "hello"
// Output: "olleh"

function reverse(str) {
    const reversed = [];
    const charLength = str.length - 1;

    for (let i = charLength; i >= 0; i--) {
        reversed.push(str[i]);
    }

    return reversed.join('');
}

console.log(reverse('Hello world!'))