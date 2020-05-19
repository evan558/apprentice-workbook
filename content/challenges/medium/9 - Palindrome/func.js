// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
    let newStr = '';
    for (let i = str.length -1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr === str;
}
