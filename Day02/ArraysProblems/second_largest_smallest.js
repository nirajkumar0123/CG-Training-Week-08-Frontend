// Function to generate a random 3-digit number
function generateRandom3DigitNumber() {
    return Math.floor(100 + Math.random() * 900);
}

// Generate 10 random 3-digit numbers and store them in an array
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(generateRandom3DigitNumber());
}

console.log("Generated numbers:", numbers);

// Function to find the 2nd largest and 2nd smallest elements without sorting the array
function findSecondLargestAndSmallest(arr) {
    let firstLargest = -Infinity, secondLargest = -Infinity;
    let firstSmallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num > secondLargest && num !== firstLargest) {
            secondLargest = num;
        }

        if (num < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = num;
        } else if (num < secondSmallest && num !== firstSmallest) {
            secondSmallest = num;
        }
    }

    return {
        secondLargest: secondLargest,
        secondSmallest: secondSmallest
    };
}

let result = findSecondLargestAndSmallest(numbers);
console.log("Second Largest:", result.secondLargest);
console.log("Second Smallest:", result.secondSmallest);