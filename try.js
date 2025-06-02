const fibonacci = (num) => {
  let curr = 1;
  let prev = 0;

  for (let i = 2; i <= num; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  return curr;
}

console.log(fibonacci(6))



/*
fibonacci = [0 , 1, 1, 2, 3, 5, 8]
             0   1  2  3  4  5  6

input : 3
output: 2

time complexity: O(n)
space complexity: O(1)


*/