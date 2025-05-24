// Splice Practice Question


// Insert "x" amd "y" at index 1 without removing anything
// Expected array after: ["a", "x", "y", "b", "c"]

const arr = ["a", "b", "c"];
arr.splice(1, 0, "x", "y");

console.log(arr);