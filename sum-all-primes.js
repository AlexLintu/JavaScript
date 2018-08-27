function sumPrimes(num) {
  function isPrime(number) {
    for (let i=2; i <= number; i++) {
      if (number % i === 0 && number !== i) {
        return false;
      }
    }
    return true;
  }
  if (num === 1) {
    return 0;
  }
  if (isPrime(num) === false) {
    return sumPrimes(num - 1);
  }
  if (isPrime(num) === true) {
    return num + sumPrimes(num - 1); 
  }
}

console.log(sumPrimes(10)); // Returns 17
