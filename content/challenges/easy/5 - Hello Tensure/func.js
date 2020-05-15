// if the number is a multiple of 3, return "Hello"
// if the number is a multiple of 5, return "Tensure"
// if the number is a multiple of both 3 and 5, return "Hello Tensure"
module.exports = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'Hello Tensure';
    } else if (num % 3 === 0) {
        return 'Hello';
    } else if (num % 5 === 0) {
        return 'Tensure';
    }
}
