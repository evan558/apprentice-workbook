// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// e.g. [['#', '#'],[2,2,2]], both sub-arrays contain identical elements so this would return 2.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.
module.exports = (arr) => {
    let same = 0;
    for (let i = 0; i < arr.length; i++) {
        const currArr = arr[i];
        if (currArr.every(x => x === currArr[0])){
            same += 1;
        }
    }
    return same;
}
