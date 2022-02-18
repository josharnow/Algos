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