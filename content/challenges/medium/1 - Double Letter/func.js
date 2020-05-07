// Create a function that takes a word and returns true if the word has two consecutive identical letters.
module.exports = (word) => {
let doubleTrouble = false;
for(i=0; i<word.length;i++){
    if (word[i] === word[i+1]){
        doubleTrouble = true;
    }
} return doubleTrouble;
}