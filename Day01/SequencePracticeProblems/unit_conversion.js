// a. Convert inches to feet
function inchesToFeet(inches) {
    return inches / 12;
}

let inches = 42;
let feet = inchesToFeet(inches);
console.log(`${inches} inches is equal to ${feet} feet`);

// b. Convert rectangular plot dimensions from feet to meters
function feetToMeters(feet) {
    return feet * 0.3048;
}

let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = feetToMeters(lengthFeet);
let widthMeters = feetToMeters(widthFeet);
console.log(`Rectangular plot of ${lengthFeet} feet x ${widthFeet} feet is equal to ${lengthMeters.toFixed(2)} meters x ${widthMeters.toFixed(2)} meters`);

// c. Calculate area of 25 such plots in acres
function squareFeetToAcres(squareFeet) {
    return squareFeet / 43560;
}

let areaOfOnePlotFeet = lengthFeet * widthFeet;
let totalAreaFeet = areaOfOnePlotFeet * 25;
let totalAreaAcres = squareFeetToAcres(totalAreaFeet);
console.log(`Area of 25 such plots is equal to ${totalAreaAcres.toFixed(2)} acres`);