// Fibonacci numbers are created in the following way:
//  - F(0) = 0
//  - F(1) = 1
//  - ...
//  - F(n) = F(n-2) + F(n-1)
// Write a function that calculates the nth Fibonacci number.
module.exports = (n) => {
  function fibonacci(num) {
    if (num < 2) {
      return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
  return fibonacci(n);
}

