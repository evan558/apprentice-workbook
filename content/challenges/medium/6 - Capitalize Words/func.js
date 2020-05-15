// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {
    let wordArr = [];
    let tempWord = '';
    for (let i = 0; i < str.length; i++) {
        const curLetter = str[i];
        if (curLetter !== ' ') {
            tempWord += curLetter;
        } else {
            wordArr.push(tempWord);
            tempWord = '';
        }
        if (i === str.length - 1) {
            wordArr.push(tempWord);
        }
    }
    let finalStr = '';
    for (let index = 0; index < wordArr.length; index++) {
        const curWord = wordArr[index];
        finalStr += curWord[0].toUpperCase() + curWord.substr(1);
        if (index < wordArr.length -1){
            finalStr += ' ';
        }
    }
    return finalStr;
}