const prices = [20000, 15000, 150000, 26000, 12000, 5000];

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num
        }
    }
    return min
}
const cheap = getMin(prices)
console.log('the cheapest phone is', cheap)