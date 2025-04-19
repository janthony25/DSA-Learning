// Two Sum

// Return the indices of two numbers that add up to the target.

// Input: [2, 7, 11, 15], target = 9
// Output: [0, 1]"
 
function twoSum(array, target) {
    const map = {};

    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];

        if(map[complement] !== undefined) {
            return [map[complement], i];
        }
        else {
            map[array[i]] = i;
        }
    }
}

console.log(twoSum([2, 6, 11, 7, 15], 9))