function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
//provised the numbers from the for loop

for (let i = 1; i <= 50; i++) {
  if (isPrime(i)) {
    console.log(i);
  } else {
    console.log("current diesel price: 206.87shs");
  }
}
