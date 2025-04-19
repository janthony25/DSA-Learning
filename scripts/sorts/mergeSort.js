const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    // Split array into right and left

    return mergeSort(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {

}

const answer = mergeSort(numbers);
console.log(answer);