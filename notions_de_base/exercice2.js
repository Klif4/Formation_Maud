const getLowerNumber = (arrayOfNumbers) => {
    if (Array.isArray(arrayOfNumbers) === false) throw 'Parameter is not an array'
    else if (arrayOfNumbers.length === 0) throw 'The array is empty'
    let lowerNumber = arrayOfNumbers[0];
    arrayOfNumbers.forEach(element => {
        if (isNaN(element) === true) throw 'Your array contains strings'
        lowerNumber = element < lowerNumber ? element : lowerNumber;
    });
    return lowerNumber;
}