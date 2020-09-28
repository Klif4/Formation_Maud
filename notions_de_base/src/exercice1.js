const getHigherNumber = (arrayOfNumbers) => {
    let higherNumber = null;
    arrayOfNumbers.forEach(element => {
        higherNumber = higherNumber < element ? element : higherNumber
    });
    return higherNumber;
}

module.exports = getHigherNumber;
