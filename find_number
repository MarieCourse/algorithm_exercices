/*TROUVER UN NOMBRE ALEATOIRE*/
/*
        On crée un nombre aléatoire entre 0 et 10, ensuite on demandera à l'utilisateur de deviner ce nombre avec 3 essais. Pour créer la logique on utilisera des fonctions spécifiques

  Une fonction isRight(n) qui renverra un booléen si l'utilisateur à la bonne réponse ou non
  Une fonction guess() qui permet de faire un essai, cette fonction renverra true ou false en fonction de la réponse donnée
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
  const number = prompt('indiquez un nombre') * 1;
  return isRight(number);
}

for (let i = 0; i < 3; i++) {
  if (guess()) {
    console.log('Bravo');
    break;
  } else if (i === 2) {
    console.log('Vous avez perdu');
  }
}
