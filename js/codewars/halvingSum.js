function halvingSum(n) {
  //Start with value of n.
  let sum = n;
  //Loop to sum the continuously halving numbers.
  for (let i = 2; i <= n; i *= 2) {
    sum += Math.floor(n / i);
  }

  return sum;
}
