//CONVERT A NUMBER IN ROMAN NUMBER

//Exercice from [OpenclassRooms](https://openclassrooms.com/fr/courses/6045521-preparez-vous-aux-tests-techniques-pour-devenir-developpeur/6173101-preparez-vous-aux-tests-d-algorithmique)

// I found this exercise incomplete since it doesn't explain how to take into account modulo 4 and 9. Here is the solution I found; for today, I am unaware of whether a better solution exists.

//In this exercice we are going to create a function called parseToRoman which, for a given number, will return its value in roman number.

function parseToRoman(number) {
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  let numberConverted = '';
  while (number > 0) {
    for (let i = 0; i < decimal.length; i++) {
      if (number % decimal[i] < number) {
        numberConverted += roman[i];
        number -= decimal[i];
        break;
      }
    }
  }
  return numberConverted;
}
console.log(parseToRoman(77));
