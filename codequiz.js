// Two Sum

// Return the indices of two numbers that add up to the target.

// Input: [2, 7, 11, 15], target = 9
// Output: [0, 1]"
function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log('hmm:', complement)
        if (map[complement] !== undefined) {
            console.log("complement", map[complement])
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}

console.log(twoSum([2, 4, 7, 11, 15], 9))