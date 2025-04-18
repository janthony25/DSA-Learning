

// Find First Recurring Character
// Input: [2, 5, 1, 2, 3, 5, 1]
// Output: 2

function firstRecurringChar(array) {
    const map = {};

    for (let i = 0; i < array.length; i++) {
        const charArray = array[i];

        if(map[array[i]] !== undefined) {
            return array[i]
        }
        else {
            map[array[i]] = i;
        }
    }

    return undefined;
}

console.log(firstRecurringChar([2, 1, 1, 2, 3, 5, 1]))