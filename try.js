const moveZeroes = (arr) => {
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
    }
  }

  return arr;
}


console.log(moveZeroes([0, 1, 0, 3, 12, 0]));