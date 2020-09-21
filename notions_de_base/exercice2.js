const isAnArray = (array) => {
    return Array.isArray(array);
}
const isEmpty = (array) => {
    return array.length === 0;
}
const hasNotOnlyNumbers = (array) => {
    const isNotANumber = (element) => isNaN(element);
    return array.some(isNotANumber);
}

const getLowerNumber = (arrayOfNumbers) => {
    if (!isAnArray(arrayOfNumbers)) throw 'Parameter is not an array'
    if (isEmpty) throw 'The array is empty';
    if(hasNotOnlyNumbers) throw 'Your array must contain numbers only'
    let lowerNumber = arrayOfNumbers[0];
    arrayOfNumbers.forEach(element => {
        lowerNumber = element < lowerNumber ? element : lowerNumber;
    });
    return lowerNumber;
}