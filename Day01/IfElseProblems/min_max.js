// Generate 5 random 3-digit values
let values = [];
for (let i = 0; i < 5; i++) {
    values.push(Math.floor(Math.random() * 900) + 100);
}

console.log("Generated values: ", values);

// Initialize min and max with the first value
let min = values[0];
let max = values[0];

// Find the minimum and maximum values using if-else
for (let i = 1; i < values.length; i++) {
    if (values[i] < min) {
        min = values[i];
    } else if (values[i] > max) {
        max = values[i];
    }
}

console.log("Minimum value: ", min);
console.log("Maximum value: ", max);