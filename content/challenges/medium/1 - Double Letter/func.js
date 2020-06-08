// Create a function that takes a word and returns true if the word has two consecutive identical letters.
module.exports = (word) => {
    let double = word.split('').some((value, index, array) => array[index] == array[index + 1])
    return double;
} 