// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Function to check if the number and its palindrome are both prime
function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        const palindrome = getPalindrome(num);
        if (isPrime(palindrome)) {
            console.log(`${num} is prime and its palindrome ${palindrome} is also prime.`);
        } else {
            console.log(`${num} is prime but its palindrome ${palindrome} is not prime.`);
        }
    } else {
        console.log(`${num} is not prime.`);
    }
}

// Take a number from the user
const readline = require("readline-sync");
const number = parseInt(readline.question("Enter a number: "), 10);

checkPrimeAndPalindrome(number);
