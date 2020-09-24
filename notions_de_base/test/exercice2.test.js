const {getLowerNumber, isAnArray, isEmpty, hasNotOnlyNumbers} = require('../src/exercice2');

test('test Throw function', () => {
    let arrayTest = [];
    expect(() => { getLowerNumber(arrayTest) })
        .toThrowError('The array is empty')
});
test('getLowerNumber throw an exception when it\'s not an array', () => {
    let arrayTest = '';
    expect(() => {getLowerNumber(arrayTest)}).toThrowError('Parameter is not an array');
})
test('getLowerNumber throw an exception when the array is empty', () => {
    let arrayTest = [];
    expect(() => {getLowerNumber(arrayTest)}).toThrowError('The array is empty');
})
test('getLowerNumber throw an exception when the array has not only numbers', () => {
    let arrayTest = [2, -25, 'toto'];
    expect(() => {getLowerNumber(arrayTest)}).toThrowError('Your array must contain numbers only')
})
test('getLowerNumber return lower number', () => {
    let arrayTest = [2, -25, 30];
    expect(getLowerNumber(arrayTest)).toBe(-25);
})

test('isAnArray return true', () => {
    expect(isAnArray([2,4])).toBe(true);
})
test('isAnArray return false', () => {
    let arrayTest = 'toto';
    console.log(isAnArray(arrayTest));
    expect(isAnArray(arrayTest)).toBe(false);
})

test('isEmpty return true', () => {
    let arrayTest = [];
    expect(isEmpty(arrayTest)).toBe(true);
})
test('isEmpty return false', () => {
    let arrayTest = [2, 25];
    expect(isEmpty(arrayTest)).toBe(false);
})

test('hasNotOnlyNumbers return true', () =>{
    let arrayTest = [2, "toto"];
    expect(hasNotOnlyNumbers(arrayTest)).toBe(true);
})
test('hasNotOnlyNumbers return false', () =>{
    let arrayTest = [2, 3];
    expect(hasNotOnlyNumbers(arrayTest)).toBe(false);
})