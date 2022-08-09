const numbers = [5, 7, 8, 10, 45, 30];

function findOddSum(numbers) {
    let totalSumOfOdd = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            continue;
        }
        else {
            totalSumOfOdd += numbers[i];
        }
    }
    return totalSumOfOdd;
}



const totalSumOfOdd = findOddSum(numbers);
console.log(totalSumOfOdd);