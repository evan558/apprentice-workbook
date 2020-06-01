// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {
    new Array(n).fill("S").forEach(() => {
        arr= arr.map(item => item % 2 === 0? item -= 2: item += 2)
    })
    return arr;
}