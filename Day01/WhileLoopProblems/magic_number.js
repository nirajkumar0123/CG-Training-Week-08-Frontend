const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let low = 1;
let high = 100;
let guess;

console.log("Think of a number between 1 and 100.");

const askQuestion = () => {
    guess = Math.floor((low + high) / 2);
    rl.question(`Is your number less than ${guess}? (yes/no) `, (answer) => {
        if (answer.toLowerCase() === 'yes') {
            high = guess - 1;
        } else {
            rl.question(`Is your number greater than ${guess}? (yes/no) `, (answer) => {
                if (answer.toLowerCase() === 'yes') {
                    low = guess + 1;
                } else {
                    console.log(`Your number is ${guess}!`);
                    rl.close();
                    return;
                }
            });
        }
        if (low <= high) {
            askQuestion();
        } else {
            console.log("There seems to be an error. Please start over.");
            rl.close();
        }
    });
};

askQuestion();