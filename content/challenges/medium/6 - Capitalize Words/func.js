// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {
    let newStr = str.split(' ').map(value => value[0].toUpperCase() + value.substring(1)).join(' ');
    return newStr;
}
//     let wordArr = str.split(' ');
//     let newArr = [];
//     for (let i = 0; i < wordArr.length; i++) {
//         const currWord = wordArr[i];
//         let newWord = currWord[0].toUpperCase() + currWord.substring(1);
//         newArr.push(newWord);
//     }
//     return newArr.join(' ');
// }