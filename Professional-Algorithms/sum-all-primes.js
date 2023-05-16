// Sum all Primes.

// PsuedoCode:
// Input is a number.
// We declare a function where the argument is a number (num).
// Declare a variable array to store the primes number.
// declare a variable for the sum.
// for loop => i>1.
// for loop => j>1.
// if statement in loop. if % 0 or any num
// if prime push to array
// sum all the prime numbers using for loop
// return result.

function sumPrimes(num) {
  let primeNums = [];
  let sum = 0;

  for (let i = 2; i <= num; i++) {
    // number from argument
    for (let j = 2; j <= num; j++) {
      // check the % num
      if (i % j !== 0) {
        continue;
      }
      if (!primeNums.includes(j)) {
        primeNums.push(j);
        break;
      }
    }
  }
  for (let item in primeNums) {
    sum += primeNums[item];
  }
  return sum;
}

// no diagram needed
