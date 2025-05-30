function twoSum(nums, target) {
    let left = nums[0];
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            return [left, right];
        }
    }

    return null;
}

console.log(twoSum([1, 2, 4, 4], 8));