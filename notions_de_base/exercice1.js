// ## Exercice 1 
// Ecrire une fonction qui prend en entrée un tableau d'entiers et qui retourne l'entier le plus grand.
let getHigherNumber = (arrayOfNumbers) => {
    let higherNumber = null;
    for (let i=0; i<arrayOfNumbers.length; i++) {
        higherNumber < arrayOfNumbers[i] ? higherNumber=arrayOfNumbers[i] : higherNumber=higherNumber;
    }
    return higherNumber;
}

var numbers = [2, -50, 30, 504];

console.log(getHigherNumber(numbers));
