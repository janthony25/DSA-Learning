// split = turns string into an array, based on the separator you give.


// Reverse each words in a sentence
// Input: "cat dog"
// Output: ["tac", "god"]

const s = "cat dog";

function reverseWords(s) {
    const words = s.split(" "); // ["cat", "dog"]
    const result = [];

    for (let i = 0; i < words.length; i++) {
        result.push(words[i].split("").reverse().join(""));
    }

    return result;
    
}

console.log(reverseWords(s));