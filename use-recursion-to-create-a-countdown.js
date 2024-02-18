//USE RECURSION TO CREATE A COUNTDOWN

/* Exercice from freeCodeCamp : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown

We have to define a function called 'countdown' with one parameter (n). 
The function should use recursion to return an array containing the integers n through 1 based on the n parameter. 
If the function is called with a number less than 1, the function should return an empty array. 
*/

function countdown(n) {
  // base case
  if (n < 1) return [];

  const output = [n]; 
  return output.concat(countdown(n - 1)); 
}

console.log(countdown(10))