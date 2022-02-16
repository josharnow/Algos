// Implements the sieve of Eratosthenes
// Input: A positive integer n > 1
// Output: Array L of all prime numbers less than or equal to n


// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question(
//   "Please input a value for n: ",
//   n => console.log(`Your value is '${n}'`)
// )

// function sieveOfEratosthenes(n) { // Generates consecutive primes not exceeding any given integer n > 1
//   if (n < 2) {
//     console.log("n must be an integer greater than 1!");
//   } else {
//     let candidateList = [];
//     for (let i = 2; i <= n; i++) {
//       // !(i % 2) && console.log(i);


//       if (i % 2 || i === 2) {
//         candidateList.push(i);
//         console.log(candidateList);
//       }
//     }
//   }
// }

function sieve(n) { // Generates consecutive primes not exceeding any given integer n > 1
  let candidateList = [];
  for (let p = 2; p <= n; p++) {
    candidateList[p] = p;
    // console.log(candidateList)
  }
  for (let p = 2; p <= Math.floor(Math.sqrt(n)); p++) {
    if (candidateList[p] !== 0) { // p hasn't been eliminated on previous passes
      let j = p * p;
      while (j <= n) {
        candidateList[j] = 0; // Mark element as eliminated
        j = j + p;
        // console.log(candidateList);
      }
    }
  }
  // Copy the remaining elements of candidateList to array L of the primes
  let i = 0;
  const L = [];
  for (let p = 2; p <= n; p++) {
    if (candidateList[p] !== 0) {
      L[i] = candidateList[p];
      i++;
      // console.log(L);
    }
    
  }
  // console.log(L);
  return L;
}

console.log(sieve(1));
console.log(sieve(25));