// Write a function that recursively determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
  function backwards (str) {
    if (str === ''){
      return str;
    }
    else {
      return backwards(str.substr(1)) + str.charAt(0);
    }
  }
  return backwards(str) === str;
}