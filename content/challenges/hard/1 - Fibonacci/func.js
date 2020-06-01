// Fibonacci numbers are created in the following way:
//  - F(0) = 0
//  - F(1) = 1
//  - ...
//  - F(n) = F(n-2) + F(n-1)
// Write a function that calculates the nth Fibonacci number.
module.exports = (n) => {
  let array = [0, 1]
  for (let i = 2; i < 100; i++) {
    array.push(array[i - 1] + array[i - 2]);
    if (i === n) {
      return array[i];
    }
    else if (n === 0) {
      return 0;
    }
    else if (n === 1) {
      return 1;
    }
  }
}