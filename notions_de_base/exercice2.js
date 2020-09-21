let getLowerNumber = (arrayOfNumbers) => {
    let lowerNumber = null;
    arrayOfNumbers.forEach(element => {
        lowerNumber = element < lowerNumber ? element : lowerNumber;
    });
    return lowerNumber;
}