// Function to generate a random dice number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Roll two dice
const dice1 = rollDice();
const dice2 = rollDice();

// Calculate the sum
const sum = dice1 + dice2;

// Print the result
console.log(`Dice 1: ${dice1}, Dice 2: ${dice2}, Sum: ${sum}`);