// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
    let newStr = '';
    let wordArr = str.split(' ');
    for (i = 0; i < wordArr.length; i++) {
        let currWord = wordArr[i];
        if (currWord.length >= 5) {
            let newWord = currWord.split('').reverse().join('');
            currWord = newWord;
        }
        newStr += currWord;
        if (i < wordArr.length - 1) {
            newStr += ' ';
        }
    }
    return newStr;
}