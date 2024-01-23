//FIND PRIME NUMBER
//Exercise taken from the tutorial of [Grafikart](https://grafikart.fr/tutoriels/fonctions-2059)

/*Create a function isPrime() that indicates whether a number is prime.*/

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log('0', isPrime(0));
console.log('1', isPrime(1));
console.log('2', isPrime(2));
console.log('11', isPrime(11));
console.log('12', isPrime(12));
