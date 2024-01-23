/*FIND A NUMBER*/
//Exercise taken from the tutorial of Grafikart : https://grafikart.fr/tutoriels/fonctions-2059

/*
We generate a random number between 0 and 10, then we will ask the user to guess this number within 3 attempts.
To create the logic, we will use specific functions:

A function isRight(n) that will return a boolean indicating whether the user has the correct answer or not.
A function guess() that allows a trial; this function will return true or false based on the given response
*/

function getRandomInt(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * (max + 1)); // The maximum is exclusive and the minimum is inclusive
}
const solution = getRandomInt(10);

function isRight(n) {
  return solution === n;
}

function guess() {
  const number = prompt('Choose a number') * 1;
  return isRight(number);
}

for (let i = 0; i < 3; i++) {
  if (guess()) {
    console.log('Bravo');
    break;
  } else if (i === 2) {
    console.log(`You've lost`);
  }
}
