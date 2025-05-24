// split = turns string into an array, based on the separator you give.


// Count how many words are in the sentence
// Input : "This is a test"
// Output: 4

const s = "This is a test";

function countWords(s) {
    return s.split(" ").length;
}

console.log(countWords(s));