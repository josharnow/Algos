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
    for (let i = 0; i <= cents; i++) {
      // Make sure the difference between the current amount and the current coin is at least 0
      // Replace the minimum value
      if ((i - coin) >= 0) {
        minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1) // Math.min returns the lowest number passed into it
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