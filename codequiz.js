
// Merge Two Sorted Arrays
// Input: [1,3,5], [2,4,6]
// Output: [1,2,3,4,5,6]

function mergeSortedArrays(array1, array2) {
    const merged = [];
    let i = 0;
    let j = 0;

    while(i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]){
            merged.push(array1[i]);
            i++;
        }
        else {
            merged.push(array2[j]);
            j++;
        }
    }

    // if array 1 has remaining
    while(i < array1.length) {
        merged.push(array1[i]);
        i++;
    }

    while(j < array2.length) {
        merged.push(array2[j]);
        j++;
    }

    return merged;
}

console.log(mergeSortedArrays([1,3,5], [2,4,6]))