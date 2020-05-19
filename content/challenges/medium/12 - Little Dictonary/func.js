// Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

module.exports = (initial, words) => {
    let finalArr = [];
    for (let i = 0; i < words.length; i++) {
        const newWord = initial + words[i].substring(initial.length);
        if (newWord === words[i]){
            finalArr.push(words[i]);
        }
    }
    return finalArr;
}