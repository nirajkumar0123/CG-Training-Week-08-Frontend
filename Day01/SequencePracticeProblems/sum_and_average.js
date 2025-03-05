// Function to generate a random 2-digit number
function getRandomTwoDigitNumber() {
    return Math.floor(Math.random() * 90) + 10;
}

// Generate 5 random 2-digit numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomTwoDigitNumber());
}

// Calculate the sum of the numbers
let sum = numbers.reduce((acc, num) => acc + num, 0);

// Calculate the average of the numbers
let average = sum / numbers.length;

// Output the results
console.log("Random 2-digit numbers: ", numbers);
console.log("Sum: ", sum);
console.log("Average: ", average);