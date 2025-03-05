function numberToWeekday(number) {
    let weekday;
    
    switch (number) {
        case 0:
            weekday = "Sunday";
            break;
        case 1:
            weekday = "Monday";
            break;
        case 2:
            weekday = "Tuesday";
            break;
        case 3:
            weekday = "Wednesday";
            break;
        case 4:
            weekday = "Thursday";
            break;
        case 5:
            weekday = "Friday";
            break;
        case 6:
            weekday = "Saturday";
            break;
        default:
            return "Invalid number. Please enter a number between 0 and 6.";
    }
    
    return weekday;
}


const number = 3;
console.log(numberToWeekday(number));