let number1 = 10;
let number2 = 5;

let remainder1 = number1 % 2;
let remainder2 = number2 % 2;

if (remainder1 === 0) {
    console.log(`The number ${number1} is even.`);
} else {
    console.log(`The number ${number1} is odd.`);
}


if (remainder2 === 0) {
    console.log(`The number ${number2} is even.`);
} else {
    console.log(`The number ${number2} is odd.`);
}


// switch condition

let number3 = 7;
let number4 = 20;

let remainder3 = number3 % 2;
let remainder4 = number4 % 2;


switch (remainder3) {
    case 0:
       console.log(`The number ${number3} is even.`);
        break;
    case 1 :
        console.log(`The number ${number3} is odd.`);
}

switch (remainder4) {
    case 0:
       console.log(`The number ${number4} is even.`);
        break;
    case 1 :
        console.log(`The number ${number4} is odd.`);
}