// this program divides two numbers using a promise

// making the function using arrow function
const divideNumbers = (num1, num2) => {
  // return a new promise
  return new Promise((resolve, reject) => {
    console.log("Dividing " + num1 + " by " + num2 + "...");

    // check if num2 is zero
    if (num2 == 0) {
      // if zero, reject with error message
      reject("Error: Division by zero is not allowed.");
    } else {
      // otherwise do the division
      var answer = num1 / num2;
      resolve(answer);
    }
  });
};

// now testing the function with 5 cases

// test 1
divideNumbers(10, 2).then(function (result) {
  console.log("Result:", result);
}).catch(function (error) {
  console.log(error);
});

// test 2 (this one is divide by zero)
divideNumbers(10, 0).then(function (result) {
  console.log("Result:", result);
}).catch(function (error) {
  console.log(error);
});

// test 3
divideNumbers(7, 2).then(function (result) {
  console.log("Result:", result);
}).catch(function (error) {
  console.log(error);
});

// test 4 (negative number)
divideNumbers(-20, 4).then(function (result) {
  console.log("Result:", result);
}).catch(function (error) {
  console.log(error);
});

// test 5
divideNumbers(0, 5).then(function (result) {
  console.log("Result:", result);
}).catch(function (error) {
  console.log(error);
});