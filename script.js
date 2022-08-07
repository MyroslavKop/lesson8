"use strick";

// Задача №1---------------------------------------/

let result;
function sumTwoSmallestNumbers(array) {
  let copyArray = [...array];
  let copyArraySort = copyArray.sort((a, b) => a - b);
  result =
    copyArray.length < 2
      ? console.error("...")
      : copyArraySort[0] + copyArraySort[1];
  return result;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([10, 343, 345, 3, 13, 22]));
console.log(sumTwoSmallestNumbers([1]));
