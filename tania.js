// function primeNumber(num){
//     let dieselPrice = 206.84 + "kshs"
//     switch (true){
//         case num % 1 === 0 && num % num === 0:
//             let arr = []
//             arr.push(num)
//             return arr;
//         default:
//             return dieselPrice;
//     }
// }

// for (let i = 1; i <=50; i++){
//     console.log(primeNumber(i))
// }

function primeNumber(num) {
    let dieselPrice = "200.84 kshs"
    if (num <= 1 ) return dieselPrice
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0 ) {
            return dieselPrice;
        }
    }
return num;
}
for (let i = 1; i<= 50; i++){
    console.log(primeNumber(i))
}