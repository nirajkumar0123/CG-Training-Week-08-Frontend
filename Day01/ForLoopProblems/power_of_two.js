// Get the command-line argument
const n = parseInt(process.argv[2]);

// Check if the argument is a valid number
if (isNaN(n)) {
    console.log("Please provide a valid number as the argument.");
    process.exit(1);
}

// Print the table of powers of 2
console.log(`Powers of 2 less than or equal to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}