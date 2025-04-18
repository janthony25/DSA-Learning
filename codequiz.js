// Two Sum
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

function twoSum(array, target) {
    const map = {};

    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        else {
            map[array[i]] = i;
        }
    }

    return map;
}

console.log(twoSum([9, 1, 7, 15, 5, 4], 9))