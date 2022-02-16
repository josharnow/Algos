// Computes gcd(m, n) by Euclid's algorithm
// Input: Two nonnegative, not-both-zero integers m and n
// Output: Greatest common divisor of m and n

function euclid(m, n) {
  while (n !== 0) {
    let r = m % n;
    m = n;
    n = r;
    // console.log(m);
  }
  // console.log(m);
  return m;
}

console.log(euclid(60, 24));