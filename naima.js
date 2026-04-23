function fizzBuzz(num) {
  switch (true) {
    case num % 3 === 0 && num % 5 === 0:
      return "FizzBuzz";

    case num % 3 === 0:
      return "Fizz";

    case num % 5 === 0:
      return "Buzz";

    default:
      return num;
  }
}

// Loop through 1 to 50
for (let i = 1; i <= 50; i++) {
  console.log(fizzBuzz(i));
}
