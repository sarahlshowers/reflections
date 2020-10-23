const incrementCount = function() {
  let num = 0;

  return function() {
    return num++;
  };
};

const counterOne = incrementCount();

console.log(counterOne()); // 0
console.log(counterOne()); // 1
console.log(counterOne()); // 2

const counterTwo = incrementCount();
console.log(counterTwo()); // 0
console.log(counterTwo()); // 1
console.log(counterTwo()); // 2

const baseNumber = 5;

const addToSum = function(base) {
  let sumStart = base;
  const num = incrementCount();

  return () => sumStart += num();
};

const incrementStartingAtFive = addToSum(baseNumber);

console.log(incrementStartingAtFive()); // 6 (5 + 1)
console.log(incrementStartingAtFive()); // 8 (6 + 2)
console.log(incrementStartingAtFive()); // 11 (8 + 3)
console.log(baseNumber); // still 5
console.log(incrementStartingAtFive()); // 15 (11 + 4)
