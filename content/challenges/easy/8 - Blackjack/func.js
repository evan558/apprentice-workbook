// Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21. If the sum exceeds 21, return true and if the sum is under or equal to 21, return false. Values of the cards are as follows:

// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count either as 1 or 11 - play conservatively, so that if giving an ace a value of 11 causes you to lose and 1 allows you to win, then go with 1.

module.exports = (cards) => {
    let sum = 0;
    let foundAce = false;
    for (i = 0; i < cards.length; i++) {
        let card = cards[i];
        switch (card) {
            case 1:
                sum += 1;
                break;
            case 2:
                sum += 2;
                break;
            case 3:
                sum += 3;
                break;
            case 4:
                sum += 4;
                break;
            case 5:
                sum += 5;
                break;
            case 6:
                sum += 6;
                break;
            case 7:
                sum += 7;
                break;
            case 8:
                sum += 8;
                break;
            case 9:
                sum += 9;
                break;
            case 'J':
            case 'Q':
            case 'K':
            case 10:
                sum += 10
                break;
            case 'A': {
                sum += 11;
                foundAce = true;
            }
        }
    }
    if (sum > 21) {
        if (foundAce == true) {
            return sum - 10 > 21;
        } return true;
    }
    return false;
};