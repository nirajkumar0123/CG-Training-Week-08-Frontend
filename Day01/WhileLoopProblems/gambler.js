let money = 100;
const goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;
    if (Math.random() < 0.5) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log("Number of bets made: " + bets);
console.log("Number of times won: " + wins);
console.log("Final amount of money: " + money);