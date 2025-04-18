
// Find Max Number in Array
// Input: [1, 9, 3, 7]
// Output: 9
// hints :
//  check if i < i + 1
//  max = i
//  
 
function findMax(array) {
    let max = array[0];

    for(let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}
console.log(findMax([1, 3, 5, 7, 33]))