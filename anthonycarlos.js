// Step 1: create array of 13 random numbers
let numbers = [];

for (let i = 0; i < 13; i++) {
  numbers[i] = Math.floor(Math.random() * 100) + 1;
}

// Step 2: separate even and odd numbers
let evens = [];
let odds = [];

let e = 0;
let o = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens[e] = numbers[i];
    e++;
  } else {
    odds[o] = numbers[i];
    o++;
  }
}

// Step 3: output results
console.log("Original:", numbers);
console.log("Even Numbers:", evens);
console.log("Odd Numbers:", odds);
