// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.
module.exports = (arr) => {
    let newArr = [];
    let identicalElement = 0;
    let singleArr = 0;
    for (let i = 0; i < arr.length; i++) {
        const subArr = arr[i];
        const nextArr = arr[i + 1];
        if (subArr.length === 1) {
            singleArr += 1;
        }
        newArr.push(subArr);
        for (let x = 0; x < subArr.length; x++) {
            if (nextArr[x] === newArr[x]) {
                identicalElement += 1;
            }
        }
        newArr = [];
    }
    if (singleArr > 1) {
        identicalElement += singleArr;
    }
    return identicalElement;
}
