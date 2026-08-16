let arr = [1, 5, 8, 3, 7];
console.log("Array:", arr);


// Arrow function - find max
let findMax = arr => Math.max(...arr);
console.log("Maximum number:", findMax(arr))


let findMin = arr => Math.min(...arr);
console.log("Minimum number:", findMin(arr));



// Anonymous function - calculate sum
let calculateSum = function (arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};
console.log("Sum of all elements:", calculateSum(arr));

// Multipliction of numbers
let calculateMul = function (arr) {
  return arr.reduce((sum, num) => sum * num);
};
console.log("Multiplication of all elements:", calculateMul(arr));




// Named function - count odd numbers
function countOdds(arr) {
  return arr.filter(num => num % 2 !== 0).length;
}
console.log("Count of odd numbers:", countOdds(arr));



//  count even numbers

function countEven(arr) {
    return arr.filter(num => num %2 ==0).length;
}
console.log("Count of even number:", countEven(arr));



