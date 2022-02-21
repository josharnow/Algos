// Implement a function sigma(num) that, given a number, returns the sum of all positive integers from 1 up to number(inclusive). Ex.: sigma(3) = 6(or 1 + 2 + 3); sigma(5) = 15(or 1 + 2 + 3 + 4 + 5).

const sigma = (num) => {
  let sum = 0;

  while (num > 0) {
    sum += num;
    --num;
  }

  console.log(sum);
}

sigma(5);

// Write a function factorial(num) that, given a number, returns the product(multiplication) of all positive integers from 1 up to number(inclusive). For example, factorial(3) = 6(or 1 * 2 * 3); factorial(5) = 120(or 1 * 2 * 3 * 4 * 5).

const factorial = (num) => {
  let product = num;

  while (num > 1) {
    product *= num - 1
    --num;
  }

  console.log(product);
}

factorial(5);

// Create function threesFives() that adds each value from 100 and 4000000(inclusive) if that value is evenly divisible by 3 or 5 but not both.

const threesFives = () => {
  let runner = 100;
  let max = 4000000;
  let sum = 100;
  let count = 0;

  const myXOR = (a, b) => {
    return ((a ? 1 : 0) ^ (b ? 1 : 0)); // Bitwise XOR approach; will return a falsy value if both are true or neither are true
  }

  while (runner <= max) {
    if (myXOR((runner % 3 === 0), (runner % 5 === 0))) { // Each evaluate to "true" if the runner is divisible by 3 and 5, in which case myXOR will return a falsy value, causing the conditional statement to be skipped. If ONLY one or other condition is true within the XOR function, the XOR function will return a truthy value
      // console.log(`${sum} + ${runner} = ${sum + runner}`)
      sum += runner;
      ++count;
    }
    ++runner;
  }

  console.log(`Total numbers added: ${count}`);
  console.log(`Total sum: ${sum}`);
}

threesFives();


const betterThreeFives = (start, end) => {
  let runner = start;
  let sum = start;
  let count = 0;

  const myXOR = (a, b) => {
    return ((a ? 1 : 0) ^ (b ? 1 : 0)); // Bitwise XOR approach; will return a falsy value if both are true or neither are true
  }

  while (runner <= end) {
    if (myXOR((runner % 3 === 0), (runner % 5 === 0))) {
      sum += runner;
      ++count;
    }
    ++runner;
  }

  console.log(`Total numbers added: ${count}`);
  console.log(`Total sum: ${sum}`);
}

betterThreeFives(10, 400000);


// Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins.
// This is a Dynamic Programming problem
const generateCoinChange = (cents) => {
  const coins = [1, 5, 10, 25];

  // Create an array to hold the minimum number of coins to make each cents amount
  // cents + 1 so that you will have indices from 0 to cents in the array
  const minCoins = new Array(cents + 1).fill(Infinity);
  
  minCoins[0] = 0; // There are 0 ways to make amount 0 with positive coin values; thus, fill array position 0 with a value of 0.

  for (let coin of coins) { // Look at one coin at a time
    for (let i = 0; i <= cents; i++) { // i represents the index in the minCoins array whose value is equal to the minimum number of coins necessary to create its value (e.g. if i = 5; the value would be 1 (for 1 nickel))
      // Make sure the difference between the current amount and the current coin is at least 0
      // Replace the minimum value
      if ((i - coin) >= 0) {
        minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1) // Math.min returns the lowest number passed into it, which will either be whatever is already in minCoins[i] OR minCoins[i - coin] + 1
      }
    }
  }
  
  let pennies = 0;
  let nickels = 0;
  let dimes = 0;
  let quarters = 0;

  let j = minCoins[cents]; // Set j equal to the minimum number of total coins necessary to reach the specified amount of cents
  let remainder = 0;
  let changeLeft = cents;

  // This while loop will assign the correct coin values in order to achieve the minimum number of coins to produce the change
  while (j > 0) {
    if ((cents - (quarters * 25)) / 25 >= 1) {
      remainder = changeLeft % 25;
      quarters = (cents - remainder) / 25;

      changeLeft -= quarters * 25;
      j -= quarters;
    } else if ((changeLeft / 10) >= 1) {
      remainder = changeLeft % 10;
      dimes = (changeLeft - remainder) / 10;

      changeLeft -= dimes * 10;
      j -= dimes;
    } else if ((changeLeft / 5) >= 1) {
      remainder = changeLeft % 5;
      nickels = (changeLeft - remainder) / 5;

      changeLeft -= nickels * 5;
      j -= nickels;
    } else {
      pennies = changeLeft;

      j -= pennies;
    }
  }

  console.log(`Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`);

  // If the value remains Infinity, it means no coin combination can make that cents amount
  return ((minCoins[cents] !== Infinity) ? minCoins[cents] : -1)
}

console.log(generateCoinChange(93));
// console.log(generateCoinChange(49));
// console.log(generateCoinChange(19));


// Statistics to Doubles
// Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these dice, tracking the statistics until doubles are rolled. Display the number of rolls, min, max, and average.
const statisticsToDoubles = () => {
  const getRandomInt = (min, max) => {
    return Math.floor((Math.random() * max) + min);
  }

  let firstRollTracker = [];
  let secondRollTracker = [];
  
  let rolls = 0;
  let i = 0;
  
  firstRollTracker.push(getRandomInt(1, 6));
  secondRollTracker.push(getRandomInt(1, 6));

  if (firstRollTracker[i] === secondRollTracker[i]) {
    ++rolls;
  } else {
    while (firstRollTracker[i] !== secondRollTracker[i]) {
      ++rolls;
      firstRollTracker.push(getRandomInt(1, 6));
      secondRollTracker.push(getRandomInt(1, 6));
      ++i;
    }
    ++rolls;
  }

  const minFirstDie = Math.min(...firstRollTracker);
  const minSecondDie = Math.min(...secondRollTracker);
  const overallMin = Math.min(minFirstDie, minSecondDie);

  const maxFirstDie = Math.max(...firstRollTracker);
  const maxSecondDie = Math.max(...secondRollTracker);
  const overallMax = Math.max(maxFirstDie, maxSecondDie);

  const sumFirstDie = firstRollTracker.reduce((previousValue, currentValue) => previousValue + currentValue);
  const sumSecondDie = secondRollTracker.reduce((previousValue, currentValue) => previousValue + currentValue);
  const overallSum = sumFirstDie + sumSecondDie;

  const averageFirstDie = sumFirstDie / rolls;
  const averageSecondDie = sumSecondDie / rolls;
  const overallAverage = (sumFirstDie + sumSecondDie) / 2;

  console.log(`Array of first die rolls: ${firstRollTracker}`);
  console.log(`Array of second die rolls: ${secondRollTracker}`);

  console.log(`First die minimum: ${minFirstDie}`);
  console.log(`Second die minimum: ${minSecondDie}`);
  console.log(`Overall minimum: ${overallMin}`);
  console.log(`First die maximum: ${maxFirstDie}`);
  console.log(`Second die maximum: ${maxSecondDie}`);
  console.log(`Overall maximum: ${overallMax}`);
  console.log(`First die sum: ${sumFirstDie}`);
  console.log(`Second die sum: ${sumSecondDie}`);
  console.log(`Overall sum: ${overallSum}`);
  console.log(`First die average: ${averageFirstDie}`);
  console.log(`Second die average: ${averageSecondDie}`);
  console.log(`Overall average: ${overallAverage}`);
  console.log(`Total number of rolls: ${rolls}`);
}

statisticsToDoubles();


// Sum to One Digit
// Implement a function sumToOne(num) that, given a number, sums that number’s digits repeatedly until the sum is only one digit.Return that final one digit result.

const sumToOneDigit = (num) => {
  const digitize = (int) => {
  // Converts the integer to a string using the spread operator to build an array, then transforms each string back into an integer inside the array. A string literal is used to convert the given integer (which is not iterable) into a string (which is iterable). If .map() is not used together with parseInt(), the values inside of the created array will remain as strings instead of integers.
    return [...`${int}`].map(string => parseInt(string));
  }

  let arrayOfDigits = digitize(num);
  
  // The while loop will continue until there is no longer a value present in the array position 1 of arrayOfDigits (i.e. there is only a value in array position 0, indicating a 1 digit number)
  while (arrayOfDigits[1]) {
    console.log(arrayOfDigits);
    
    let sum = arrayOfDigits.reduce((prevVal, currVal) => prevVal + currVal);
    arrayOfDigits = digitize(sum);
  }
  console.log(`Result: ${arrayOfDigits[0]}`)
}

sumToOneDigit(542609);

// Implement the Fibonacci function, a famous mathematical equation that generates a numerical sequence such that each number is the sum of the previous two.The Fibonacci numbers at index 0 and 1, coincidentally, have values of 0 and 1. Your function should accept an argument of which Fibonacci number.
// F(n) = F(n-1) + F(n-2)
const fibonacciLoop = (num) => {
  let a = 1;
  let b = 0;
  let arr = [];
  let i = num;
  let temp;

  while (i >= 0) {
    arr.push(b);
    temp = a;
    a += b;
    b = temp;
    --i;
  }

  console.log(arr);
  return arr[num];
}

console.log(fibonacciLoop(27));

const fibonacciRecursive = (num) => {
  if (num <= 1) { // Base case
    return num;
  }

  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

console.log(fibonacciRecursive(27));

const fibonacciMemo = (num, memo) => {
  memo = memo || {};

  if (memo[num]) { // Stores the value of each index in a hash, avoiding the computational time of that value for the next N times
    return memo[num];
  }

  if (num <= 1) { // Base case
    return num;
  }

  return memo[num] = fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo);
}

console.log(fibonacciMemo(27));