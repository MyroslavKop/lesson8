"use strick";

// Задача №1---------------------------------------/

// function sumTwoSmallestNumbers(...array) {
//   let copyArray = [...array];
//   let copyArraySort = copyArray.sort((a, b) => a - b);
//   if (copyArraySort.length < 2) {
//     return console.error("...");
//   } else {
//     return copyArraySort[0] + copyArraySort[1];
//   }
// }
// console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77));
// console.log(sumTwoSmallestNumbers(10, 343, 345, 3, 13, 22));
// console.log(sumTwoSmallestNumbers(1));

// Задача №2---------------------------------------/

// function createCalculator(x) {
//   let result = x;
//   return {
//     sum: function (y) {
//       return (result = result + y);
//     },
//     mult: function (y) {
//       return (result = result * y);
//     },
//     min: function (y) {
//       return (result = result - y);
//     },
//     div: function (y) {
//       return (result = result / y);
//     },
//   };
// }

// const calc = createCalculator(10);
// console.log(calc.sum(5));
// console.log(calc.mult(10));
// console.log(calc.min(40));
// console.log(calc.div(10));
