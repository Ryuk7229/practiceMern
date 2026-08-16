let arr = [1, 5, 8, 3, 7];
console.log("Array:", arr);


// Arrow function - find max
let findMax = arr => Math.max(...arr);
console.log("Maximum number:", findMax(arr))


// Anonymous function - calculate sum
let calculateSum = function (arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};
console.log("Sum of all elements:", calculateSum(arr));


// Named function - count odd numbers
function countOdds(arr) {
  return arr.filter(num => num % 2 !== 0).length;
}
console.log("Count of odd numbers:", countOdds(arr));