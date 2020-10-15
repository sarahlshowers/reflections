let num = 0;

// function incrementCount() {
//   return num++;
// }

let incrementCount = () => num++;

// console.log(incrementCount(), 'incrementCount'); // 0
// console.log(incrementCount(), 'incrementCount'); // 1
// console.log(incrementCount(), 'incrementCount'); // 2

let sum = 5;

// function addToSum() {
//   let i = sum;
//   sum = i + incrementCount();

//   return sum;
// }

let addToSum = () => {
  let i = sum;
  sum = i + incrementCount();

  return sum;
}

// console.log(addToSum(), 'addToSum'); // 5
// console.log(addToSum(), 'addToSum'); // 6
// console.log(addToSum(), 'addToSum'); // 8
// console.log(addToSum(), 'addToSum'); // 11

const start = 5;

const makeCounter = function() {
  let newStart = start;
  let num = 1;

  const incrementFunc = () => num++;

  return {
    sum: () => {
      newStart += incrementFunc();
    },
    value: () => newStart
  }
};

const counter = makeCounter();

// console.log(counter.value()); // returns 5
// console.log(start); // returns 5

// counter.sum(); // adds 1

// console.log(counter.value()); // returns 6
// console.log(start); // returns 5

// counter.sum(); // adds 2

// console.log(counter.value()); // returns 8
// console.log(start); // returns 5

// counter.sum(); // adds 3

// console.log(counter.value()); // returns 11
// console.log(start); // returns 5