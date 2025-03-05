// Get the command-line argument
const n = parseInt(process.argv[2]);

// Function to calculate the nth harmonic number
function harmonicNumber(n) {
    let harmonic = 0;
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }
    return harmonic;
}

// Check if n is a valid number
if (isNaN(n) || n <= 0) {
    console.log("Please provide a positive integer as the argument.");
} else {
    const result = harmonicNumber(n);
    console.log(`The ${n}th harmonic number is ${result}`);
}