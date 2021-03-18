let sum = [];
sum = 0;

while (true) {
  let value = Number(prompt("Enter a number", ""));

  if (!value) break;

  sum += value;
}

function calculateSummation(sum) {
  let result = 0;
  for (let i = 0; i < sum.length; i++) {
    result += sum[i];
  }
  alert(sum);
}

calculateSummation(sum);
