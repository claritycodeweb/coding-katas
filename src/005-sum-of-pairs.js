// https://www.codewars.com/kata/sum-of-pairs

// with two iterations
function sumPairs(allNums, sum) {
  const pairs = [];
  allNums.forEach((leftNumber, leftIndex) => {
    for (
      let rightIndex = leftIndex + 1;
      rightIndex < allNums.length;
      rightIndex++
    ) {
      const rightNumber = allNums[rightIndex];
      if (leftNumber + rightNumber === sum) {
        pairs.push({
          pair: [leftNumber, rightNumber],
          rightIndex,
        });
      }
    }
  });

  if (pairs.length === 0) {
    return undefined;
  }

  let finalPair = pairs[0];
  for (let i = 0; i < pairs.length; i++) {
    const currentPair = pairs[i];
    if (finalPair.rightIndex > currentPair.rightIndex) {
      finalPair = currentPair;
    }
  }
  return finalPair.pair;
}

// one iteration
var sumPairs = function (numbers, sum) {
  const seen = {};
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const need = sum - currentNumber;
    if (seen[need]) {
      return [need, currentNumber];
    } else {
      seen[currentNumber] = true;
    }
  }
  return undefined;
};

console.log(
  sumPairs([20, -13, 40], -7),
  undefined,
  "No Match: [20, -13, 40] should return undefined for sum = -7"
);
console.log(
  sumPairs([1, 2, 3, 4, 1, 0], 2),
  [1, 1],
  "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2"
);
console.log(
  sumPairs([10, 5, 2, 3, 7, 5], 10),
  [3, 7],
  "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10"
);
console.log(
  sumPairs([4, -2, 3, 3, 4], 8),
  [4, 4],
  "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8"
);
console.log(
  sumPairs([0, 2, 0], 0),
  [0, 0],
  "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0"
);
console.log(
  sumPairs([5, 9, 13, -3], 10),
  [13, -3],
  "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10"
);
