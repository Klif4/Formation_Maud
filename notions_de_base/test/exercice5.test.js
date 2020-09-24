const { sortCardByQuantities, hasNoValidQuantity } = require('../src/exercice5');

const cardTest = [
    {
        quantity: 8,
        item: { name: 'chaise', price: 10 }
    }, {
        quantity: 2,
        item: { name: 'table', price: 50 }
    }, {
        quantity: 1,
        item: { name: 'canape', price: 200 }
    }
]
const cardTestWithInvalidQuantity = [{
    quantity: "toto",
    item: { name: 'chaise', price: 10 }
}, {
    quantity: 2,
    item: { name: 'table', price: 50 }
}, {
    quantity: 1,
    item: { name: 'canape', price: 200 }
}]

test('SortCardByQuantities return the card sort by quantities', () => {
    let sortedCardExpected = sortCardByQuantities(cardTest);
    expect(sortedCardExpected[0].quantity).toStrictEqual(1);
})

test('sortCardByquantities throw an error when a quantity is invalid', () => {
    expect(() => { sortCardByQuantities(cardTestWithInvalidQuantity) }).toThrowError('invalid quantity');
})

test('hasNoValidQuantity return true when a quantity is not an integer', () => {
    expect(hasNoValidQuantity(cardTestWithInvalidQuantity)).toBe(true);
})

test('hasNoValidQuantity return true when all quantities are integer', () => {
    expect(hasNoValidQuantity(cardTest)).toBe(false);
}) 