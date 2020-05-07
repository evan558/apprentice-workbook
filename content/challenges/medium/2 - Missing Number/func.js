// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = (arr) => {
    let missing = null;
    let sum = 0;
    for (i = 0; i < arr.length; i++){ 
        sum += arr[i];     
 } missing = 55-sum;
 return missing;
}