const prompt = require('prompt-sync')();

function feetToInch(feet) {
    return feet * 12;
}

function inchToFeet(inches) {
    return inches / 12;
}

function feetToMeter(feet) {
    return feet * 0.3048;
}

function meterToFeet(meters) {
    return meters / 0.3048;
}

console.log("Choose a conversion option:");
console.log("1. Feet to Inch");
console.log("2. Inch to Feet");
console.log("3. Feet to Meter");
console.log("4. Meter to Feet");

const choice = parseInt(prompt("Enter your choice (1-4): "));

let input, result;

switch (choice) {
    case 1:
        input = parseFloat(prompt("Enter feet: "));
        result = feetToInch(input);
        console.log(`${input} feet is equal to ${result} inches.`);
        break;
    case 2:
        input = parseFloat(prompt("Enter inches: "));
        result = inchToFeet(input);
        console.log(`${input} inches is equal to ${result} feet.`);
        break;
    case 3:
        input = parseFloat(prompt("Enter feet: "));
        result = feetToMeter(input);
        console.log(`${input} feet is equal to ${result} meters.`);
        break;
    case 4:
        input = parseFloat(prompt("Enter meters: "));
        result = meterToFeet(input);
        console.log(`${input} meters is equal to ${result} feet.`);
        break;
    default:
        console.log("Invalid choice.");
}