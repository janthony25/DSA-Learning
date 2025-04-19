// " 1.
//     First recurring number
 
//     Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//     It should return 2

//     Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//     It should return 1

//     Given an array = [2, 3, 4, 5]
//     It should return undefined"""

function firstRecurringNumber(array)  {
    const map = {};

    for (let i = 0; i < array.length; i++) {
        const char = array[i];
        if (map[array[i]] !== undefined) {
            return char;
        }else {
            map[array[i]] = i;
        }
    }

    return undefined;
}

console.log(firstRecurringNumber([2, 1, 1, 2, 3, 5, 1, 2, 4]))