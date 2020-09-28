const { getQuantityAndPriceOfObjects, isEmpty } = require('../src/exercice3');

test('getQuantityAndPriceOfObject return quantity and price of a card objects', () => {
    let cardTest = [{ quantity: 8, item: { name: 'chaise', price: 10 } },
    { quantity: 2, item: { name: 'table', price: 50 } }]
    let newCardExpected = [{ quantity: 8, price: 10 }, { quantity: 2, price: 50 }]
    expect(getQuantityAndPriceOfObjects(cardTest)).toMatchObject(newCardExpected);
});

test('getQuantityAndPriceOfObject throw an error when card is empty', () => {
    let card = [];
    expect(() => {getQuantityAndPriceOfObjects(card)}).toThrowError('Your card is empty');
})

test('isEmpty return true when array is empty', () => {
    let arrayTest = [];
    expect(isEmpty(arrayTest)).toBe(true);
})

test('isEmpty return false when array is not empty', () => {
    let arrayTest = [2, 3, 'toto'];
    expect(isEmpty(arrayTest)).toBe(false);
})