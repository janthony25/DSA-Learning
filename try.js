// sort() - Sorts the elements of an array in place, alphabetically by default


const nums = [3, 2, 1];
 
function sortNumbers(nums) {
    return nums.sort((a,b) => a-b);
}

console.log(sortNumbers(nums));