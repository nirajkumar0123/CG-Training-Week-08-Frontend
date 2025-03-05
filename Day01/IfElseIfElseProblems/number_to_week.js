function numberToWeekday(number) {
    if (number === 1) {
        console.log("Sunday");
    } else if (number === 2) {
        console.log("Monday");
    } else if (number === 3) {
        console.log("Tuesday");
    } else if (number === 4) {
        console.log("Wednesday");
    } else if (number === 5) {
        console.log("Thursday");
    } else if (number === 6) {
        console.log("Friday");
    } else if (number === 7) {
        console.log("Saturday");
    } else {
        console.log("Invalid number. Please enter a number between 1 and 7.");
    }
}

// Example usage:
numberToWeekday(3); // Output: Tuesday
numberToWeekday(8); // Output: Invalid number. Please enter a number between 1 and 7.