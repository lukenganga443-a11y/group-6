let groupAges = [18, 18, 18, 18, 24]; // group of 5 people, 4 of them are 18 years old and 1 is 24 years old

function totalAges(ages) {
  let total = 0;

  for (let age of ages) {
    total += age;
  }
  return total;
};

function averageAge(ages) {
  let total = totalAges(ages);
  let groupAverage = total / ages.length;
  return groupAverage;

}

console.log(totalAges(groupAges));
console.log(averageAge(groupAges));
