// Remove Duplicates from Sorted Array
// Input: [1,1,2,3,3]
// Output: [1,2,3]

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let slow = 0;

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1; // Count of unique elements
}

// Example usage
const arr = [1, 1, 2, 3, 3];
const length = removeDuplicates(arr);

console.log("Unique count:", length);              // Output: 3
console.log("Result:", arr.slice(0, length));      // Output: [1, 2, 3]
