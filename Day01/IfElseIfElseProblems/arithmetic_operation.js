const a = parseFloat(prompt("Enter the first number (a):"));
const b = parseFloat(prompt("Enter the second number (b):"));
const c = parseFloat(prompt("Enter the third number (c):"));

const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

let max = result1;
let min = result1;

// Finding the maximum value
if (result2 > max) {
    max = result2;
}
if (result3 > max) {
    max = result3;
}
if (result4 > max) {
    max = result4;
}

// Finding the minimum value
if (result2 < min) {
    min = result2;
}
if (result3 < min) {
    min = result3;
}
if (result4 < min) {
    min = result4;
}

console.log(`Results: 
1. a + b * c = ${result1}
2. a % b + c = ${result2}
3. c + a / b = ${result3}
4. a * b + c = ${result4}`);

console.log(`Maximum value: ${max}`);
console.log(`Minimum value: ${min}`);