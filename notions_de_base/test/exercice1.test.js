const getHigherNumber =  require('../src/exercice1');

test('getHigherNumber return higher number', () => {
    let arrayTest = [3,19,-30];
    expect(getHigherNumber(arrayTest)).toBe(19);
}) 