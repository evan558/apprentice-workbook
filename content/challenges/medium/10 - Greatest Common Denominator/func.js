// Write a function that returns the greatest common divisor (GCD) of two integers.
// Notes: 
//   - Both values will be positive.
//   - The GCD is the largest factor that divides both numbers.
module.exports = (int1, int2) => {
    for (let i = 1000; i > 0; i--) {
        const currNum = i;
        if (int1 % currNum === 0 && int2 % currNum === 0){
            return currNum;
        }
    }
}
