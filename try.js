// split = turns string into an array, based on the separator you give.


// Write a function to return the first letter of each word in sentence
// output: ["h", "w", "t"]
const s = "hello world test";

function firstLetter(s) {
  let words = s.split(" "); // ["hello", "world", "test"]
  const result = [];

  // loop through the words
  for (let i = 0; i < words.length; i++) {

    result.push(words[i][0]);
  }

  return result;
}

console.log(firstLetter(s));