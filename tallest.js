const numbers = [65, 66, 68, 72, 78, 60, 70];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max
}
const max = getMax(numbers);
console.log('max value is', max)
