const getLowerNumber =  require('../src/exercice2');

test('getLowerNumber throw an exception when it\'s not an array', () => {
    let arrayTest = [1, -5];
    try {
        getLowerNumber(arrayTest);
        fail('function should throw an error')
        
    } catch (error) {
        expect(error).toBe('Parameter is not an array')
    }
}) 
