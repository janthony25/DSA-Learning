// sort() - Sorts the elements of an array in place, alphabetically by default


// Sort letters of a word alphabetically
const word = "banana";
 
function sortWord(word){
    return word.split("").sort().join("");
}

console.log(sortWord(word));