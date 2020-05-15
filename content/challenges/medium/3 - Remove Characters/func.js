// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = (str) => {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        const currChar = str[i];
        if (currChar !== '(' && currChar !== '.' && currChar !== ')' && currChar !== '!' && currChar !== '@' && currChar !== '#' && currChar !== '$' && currChar !== '%' && currChar !== '^' && currChar !== '&' && currChar !== '*') {
            newStr += currChar;
        }
    }
    return newStr;
}
