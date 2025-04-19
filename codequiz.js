// "2.
// Merge sorted array
// mergeSortedArrays ([0,3, 4, 31], [4, 6, 30]);
// [0, 3, 4, 4, 6, 30, 31]"
 
function mergeSortedArrays(array1, array2){
    const merged = [];
    let i = 0, j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]) {
            merged.push(array1[i]);
            i++;
        }
        else {
            merged.push(array2[j]);
            j++;
        }
    }

    while (i < array1.length) {
        merged.push(array1[i]);
        i++;
    }

    while (j < array2.length) {
        merged.push(array2[j]);
        j++;
    }

    return merged;
}

console.log(mergeSortedArrays ([0,3, 4, 31], [4, 6, 30]))