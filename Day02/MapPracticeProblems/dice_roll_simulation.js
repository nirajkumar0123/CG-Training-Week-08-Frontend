function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

let diceResults = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
let maxRolls = 10;
let reachedMax = false;

// Keep rolling until one number reaches 10 times
while (!reachedMax) {
    let roll = rollDie();
    diceResults[roll]++;
    
    if (diceResults[roll] === maxRolls) {
        reachedMax = true;
    }
}

// Find the number that appeared most and least times
let maxNumber = Object.keys(diceResults).reduce((a, b) => (diceResults[a] > diceResults[b] ? a : b));
let minNumber = Object.keys(diceResults).reduce((a, b) => (diceResults[a] < diceResults[b] ? a : b));

console.log("Dice Roll Results:", diceResults);
console.log(`Number that appeared maximum times: ${maxNumber} (${diceResults[maxNumber]} times)`);
console.log(`Number that appeared minimum times: ${minNumber} (${diceResults[minNumber]} times)`);
