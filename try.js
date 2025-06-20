function removeDuplicate(arr) {
  const seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(removeDuplicate([1,2,2,3,4,4,5]));