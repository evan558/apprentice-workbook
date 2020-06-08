// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
    let isIso = str.split('').sort().some((value, index, array) => array[index].toUpperCase() == array[index + 1].toUpperCase());
    if (isIso == true) {
        return false;
    }
    else {
        return true;
    }
}
//     let foundCharacters = [];
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         for (let x = 0; x < foundCharacters.length; x++) {
//             const curFound = foundCharacters[x];
//             if (curFound.toUpperCase() === char.toUpperCase()) {
//                 return false
//             }
//         }
//         foundCharacters.push(char);
//     }
//     return true;
// }


