function numberToWord(number) {
    let word;
    if (number === 1) {
        word = 'one';
    } else if (number === 2) {
        word = 'two';
    } else if (number === 3) {
        word = 'three';
    } else if (number === 4) {
        word = 'four';
    } else if (number === 5) {
        word = 'five';
    } else if (number === 6) {
        word = 'six';
    } else if (number === 7) {
        word = 'seven';
    } else if (number === 8) {
        word = 'eight';
    } else if (number === 9) {
        word = 'nine';
    } else if (number === 0) {
        word = 'zero';
    } else {
        word = 'Number out of range';
    }
    return word;
}

console.log(numberToWord(3)); 
console.log(numberToWord(7)); 
console.log(numberToWord(10)); 