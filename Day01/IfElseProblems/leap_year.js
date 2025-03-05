function isLeapYear(year) {
    if (year.toString().length !== 4) {
        return "Please enter a 4-digit year.";
    }
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "The year " + year + " is a Leap Year.";
    } else {
        return "The year " + year + " is not a Leap Year.";
    }
}

let year = 2020;
console.log(isLeapYear(year));