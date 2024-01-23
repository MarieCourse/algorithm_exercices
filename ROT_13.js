//ROT13 DECRYPTION ALGORITHM

/*
Exercice from OpenclassRooms : 

https://openclassrooms.com/fr/courses/6045521-preparez-vous-aux-tests-techniques-pour-devenir-developpeur/6173101-preparez-vous-aux-tests-d-algorithmique

We are going to create our little Turing machine and crack an encryption algorithm.

We will attempt to crack what is called ROT13 (or Rotate By 13 Places). 
The idea is to shift each letter of the alphabet by 13 places.
*/

function transformToRot13(stringToTranform) {
  return stringToTranform
    .split('')
    .map((char) => {
      const code = char.charCodeAt(char);
      if (code < 65 || code > 90) {
        //Alphabet (A-Z) code characters are comprised between 65 and 90.
        return String.fromCharCode(code);
      } else if (code < 78) {
        return String.fromCharCode(code + 13);
      } else {
        return String.fromCharCode(code - 13);
      }
    })
    .join('');
}

console.log(transformToRot13('URYYB JBEYQ'));
