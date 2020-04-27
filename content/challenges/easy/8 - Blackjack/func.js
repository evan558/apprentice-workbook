// Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21. If the sum exceeds 21, return true and if the sum is under or equal to 21, return false. Values of the cards are as follows:

// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count either as 1 or 11 - play conservatively, so that if giving an ace a value of 11 causes you to lose and 1 allows you to win, then go with 1.

module.exports = (cards) => {
sum=0
switch (sum){
    case 1:
        sum = sum +1;
    case 2: 
        sum = sum +2;
    case 3: 
        sum = sum +3;
    case 4: 
        sum = sum +4
    case 5: 
        sum = sum +5;
    case 6:
        sum = sum +6;
    case 7:
        sum = sum +7;
    case 8:
        sum = sum +8;
    case 9:
        sum = sum +9;
    break;
    case 'J':
        case 'Q':
            case 'K':
                case 10:
                    sum = sum + 10;
    break;
} if (sum>21){
    return true;
} else if(sum<=21) {
    return false;
}
};
