// for (i=0; i<10; i++) {
//     console.log("Rohan" , i);
    
// }




let number = 153;
let n = 10;
let sumFirstN = 0;
let tableNumber = number;
let primeNumber = number;
let isPrime = true;
let factorNumber = number;
let digitSumNumber = number;
let digitSum = 0;
let armstrongNumber = number;
let armstrongSum = 0;

// sum of numbers

for (let i = 1; i <= n; i++) {
    sumFirstN = sumFirstN + i;
}

console.log("Sum of first " + n + " numbers: " + sumFirstN);

// print table

for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}


// prime number

if (n < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log("Is " + n + " a prime number? " +
    (isPrime ? "Yes" : "No"));

    
// factors

    let factors = "";

    for (let i = 1; i <= factorNumber; i++) {
    if (factorNumber % i === 0) {
        factors = factors + i + ", ";
    }
}

    factors = factors.slice(0, -2);

    console.log("Factors: " + factors);

   
   
// Sum

    let tempNumber = digitSumNumber;

while (tempNumber > 0) {
    let digit = tempNumber % 10;
    digitSum = digitSum + digit;
    tempNumber = Math.floor(tempNumber / 10);
}

console.log("Sum of digits of " + digitSumNumber + ": " + digitSum);


// Armstrong Number

let armstrongTemp = armstrongNumber;
let numberOfDigits = armstrongNumber.toString().length;

while (armstrongTemp > 0) {
    let digit = armstrongTemp % 10;

    armstrongSum =
        armstrongSum + Math.pow(digit, numberOfDigits);

    armstrongTemp =
        Math.floor(armstrongTemp / 10);
}

let isArmstrong = (armstrongSum === armstrongNumber);

console.log(
    "Is " + armstrongNumber + " an Armstrong number? " +
    (isArmstrong ? "Yes" : "No")
);




