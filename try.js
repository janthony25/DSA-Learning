// split = turns string into an array, based on the separator you give.


// Return words longer than 3 characters.
// Input: "hi this is amazing"
// Output: ["this", "amazing"]

const s = "hi this is amazing";

function moreThan3Chars(s) {
    const words = s.split(" "); // ["hi", "this", "is", "amazing"]
    const result = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 3) {
            result.push(words[i]);
        }
    }
    return result;
}

console.log(moreThan3Chars(s));