function convertTemperature(value, conversionType) {
    switch (conversionType) {
        case 'CtoF':
            if (value >= 0 && value <= 100) {
                return (value * 9/5) + 32;
            } else {
                return 'Input must be between 0°C and 100°C';
            }
        case 'FtoC':
            if (value >= 32 && value <= 212) {
                return (value - 32) * 5/9;
            } else {
                return 'Input must be between 32°F and 212°F';
            }
        default:
            return 'Invalid conversion type';
    }
}

console.log(convertTemperature(25, 'CtoF'));
console.log(convertTemperature(77, 'FtoC')); 
console.log(convertTemperature(150, 'CtoF')); 
console.log(convertTemperature(300, 'FtoC'));