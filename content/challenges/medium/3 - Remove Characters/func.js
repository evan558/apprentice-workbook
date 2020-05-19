// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = (str) => {
    let newStr = ''
    let badChars = ['(', '.', ')', '!', '@', '#', '$', '%', '^', '&', '*'];
    for (let i = 0; i < str.length; i++) {
        const currChar = str[i];
        // if (currChar !== '(' && currChar !== '.' && currChar !== ')' && currChar !== '!' && currChar !== '@' && currChar !== '#' && currChar !== '$' && currChar !== '%' && currChar !== '^' && currChar !== '&' && currChar !== '*') {
        if (!badChars.includes(currChar)){  
            newStr += currChar;
        }
    }
    return newStr;
}
