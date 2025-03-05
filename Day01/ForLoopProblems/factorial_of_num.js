function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers";
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

const input = parseInt(prompt("Enter a number: "), 10);
if (!isNaN(input)) {
    console.log(`Factorial of ${input} is ${factorial(input)}`);
} else {
    console.log("Please enter a valid number");
}