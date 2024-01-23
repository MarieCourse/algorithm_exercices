//FIND DES PALINDROMES
//Exercise taken from the tutorial of [Grafikart](https://grafikart.fr/tutoriels/fonctions-2060)

/*
The objective of this exercise is to create a function `isPalindrome()` that will return true if a word is a palindrome and false otherwise. The function will be case-insensitive.

Functions used : 
toUpperCase()
split()
reverse()
join()
*/

function isPalindrome(word) {
  let upperCase = word.toUpperCase();
  let reversedWord = upperCase.split('').reverse().join(''); //We can only use Reverse on arrays, not on strings

  return upperCase === reversedWord;
}
console.log(isPalindrome('ola'));
console.log(isPalindrome('kayak'));
console.log(isPalindrome('Kayak'));
