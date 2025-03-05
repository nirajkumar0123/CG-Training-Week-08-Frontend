function generateBirthMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

let birthMonths = {};

// Generate birth months for 50 individuals
for (let i = 1; i <= 50; i++) {
    let month = generateBirthMonth();
    if (!birthMonths[month]) {
        birthMonths[month] = [];
    }
    birthMonths[month].push(`Person ${i}`);
}

// Print individuals having birthdays in the same month
console.log("Individuals grouped by birth month:");
for (let month in birthMonths) {
    console.log(`Month ${month}: ${birthMonths[month].length} individuals →`, birthMonths[month]);
}
