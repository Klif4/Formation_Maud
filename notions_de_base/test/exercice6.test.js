const {sortCardByPrice, hasNoValidPrice} = require('../src/exercice6');
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
const cardTestWithInvalidPrice = [{
    quantity: "toto",
    item: { name: 'chaise', price: 10 }
}, {
    quantity: 2,
    item: { name: 'table', price: undefined }
}, {
    quantity: 1,
    item: { name: 'canape', price: 200 }
}]

test('sortCardByPrice return the card sorted by price', () => {
    let sortedCardByPrice = sortCardByPrice(cardTest);
    expect(sortedCardByPrice[1].item.price).toStrictEqual(50);
})

test('sortCardByPrice throw an error when there is an invalid price', () => {
    expect(() => {sortCardByPrice(cardTestWithInvalidPrice)}).toThrowError('Invalid price');
})

test('hasNovalidPrice return true when a price is not an integer', () => {
    expect(hasNoValidPrice(cardTestWithInvalidPrice)).toBe(true);
})

test('hasNovalidPrice return false when all prices are integer', () => {
    expect(hasNoValidPrice(cardTest)).toBe(false);
})