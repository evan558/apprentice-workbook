// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {
    let newArr = arr;
    for (let x = 0; x < n; x++) {
        if (x < n + 1) {
            for (let i = 0; i < newArr.length; i++) {
                const currNum = newArr[i];
                if (currNum % 2 === 0) {
                    newArr[i] -= 2;
                }
                else {
                    newArr[i] += 2;
                }
            }
        }
    }
    return newArr;
}