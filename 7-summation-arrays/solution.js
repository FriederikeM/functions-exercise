function calculateSummation(randomNumbers) {
  let sum = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    sum += randomNumbers[i];
  }
  return sum;
}

console.log(calculateSummation([1, 5, 7, 2, 8]));
console.log(calculateSummation([2, 6, 9, 10, 11]));
console.log(calculateSummation([2, 5, 5, 8, 20]));
console.log(calculateSummation([9, 2, 3, 5, 3]));
console.log(calculateSummation([]));
