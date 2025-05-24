// split = turns string into an array, based on the separator you give.


// Return an array of all characters except spaces.
// Input: "abc def"
// Output: ["a", "b", "c", "d", "e", "f"]


const s = "abc def";

function noSpacesChars(s) {
    const chars = s.split("");
    const result = [];

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== " ") {
            result.push(chars[i]);
        } 
    }

    return result;
}

console.log(noSpacesChars(s));