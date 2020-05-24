// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// e.g. [['#', '#'],[2,2,2]], both sub-arrays contain identical elements so this would return 2.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.
module.exports = (arr) => {
  let same = 0;
  for (let i=0; i<arr.length; i++){
      let identical = true;
      const currArr = arr[i];
      for (z=0; z<currArr.length; z++){
          if (currArr[z] != currArr[0]){
              identical = false;
          }
      }
      if (identical == true){
          same += 1; 
      }
  }
  return same;
}
