// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given
module.exports = (bool) => {
    if (bool === true) {
        return false;
    } else if (bool === false) {
        return true;
    } else if (bool !== Boolean) {
        return 'boolean expected';
    }
};
