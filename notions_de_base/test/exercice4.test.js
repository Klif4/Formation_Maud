const { getTheBill, isEmpty, hasNoValidPriceOrQuantity } = require('../src/exercice4');

test('getTheBill return the final price of a card', () => {
    let cardTest = [
        {
            quantity: 8,
            item: { name: 'chaise', price: 10 }
        }, {
            quantity: 2,
            item: { name: 'table', price: 50 }
        }, {
            quantity: 1,
            item: { name: 'canape', price: 200 }
        }]
    expect(getTheBill(cardTest)).toBe(380);
})

test('getTheBill throw an error when card is empty', () => {
    let cardTest = [];
    expect(() => {getTheBill(cardTest)}).toThrowError('Your card is empty');
})

test('getTheBill throw an error when quantity is unvalid', () => {
    let cardTest = [
        {
            quantity: 'toto',
            item: { name: 'chaise', price: 10 }
        }, {
            quantity: 2,
            item: { name: 'table', price: 50 }
        }, {
            quantity: 1,
            item: { name: 'canape', price: 200 }
        }]
    expect(() => {getTheBill(cardTest)}).toThrowError('Price or quantity missing on one object');
})

test('getTheBill throw an error when price is unvalid', () => {
    let cardTest = [
        {
            quantity: 8,
            item: { name: 'chaise', price: 10 }
        }, {
            quantity: 2,
            item: { name: 'table', price: "toto" }
        }, {
            quantity: 1,
            item: { name: 'canape', price: 200 }
        }]
    expect(() => {getTheBill(cardTest)}).toThrowError('Price or quantity missing on one object');
})

test('isEmpty return true when array is empty', () => {
    expect(isEmpty([])).toBe(true);  
})

test('isEmpty return false when array is not empty', () => {
    expect(isEmpty([2, 4])).toBe(false);
})

test('hasNoValidPriceOrQuantity return false when card contain only integers on price or quantity keys', () => {
    let cardTest = [{quantity: 8,item: { name: 'chaise', price: 10 }}]
    expect(hasNoValidPriceOrQuantity(cardTest)).toBe(false);
})

test('hasNoValidPriceOrQuantity return true when card contain undefined on quantity key', () => {
    let cardTest = [{quantity: undefined,item: { name: 'chaise', price: 10 }}]
    expect(hasNoValidPriceOrQuantity(cardTest)).toBe(true);
})
test('hasNoValidPriceOrQuantity return true when card contain string on quantity key', () => {
    let cardTest = [{quantity: 'toto',item: { name: 'chaise', price: 10 }}]
    expect(hasNoValidPriceOrQuantity(cardTest)).toBe(true);
})
test('hasNoValidPriceOrQuantity return true when card contain null on quantity key', () => {
    let cardTest = [{quantity: null,item: { name: 'chaise', price: 10 }}]
    expect(hasNoValidPriceOrQuantity(cardTest)).toBe(true);
})

test('hasNoValidPriceOrQuantity return true when card contain undefined on price key', () => {
    let cardTest = [{quantity: 8,item: { name: 'chaise', price: undefined }}]
    expect(hasNoValidPriceOrQuantity(cardTest)).toBe(true);
})
test('hasNoValidPriceOrQuantity return true when card contain string on price key', () => {
    let cardTest = [{quantity: 8,item: { name: 'chaise', price: "toto" }}]
    expect(hasNoValidPriceOrQuantity(cardTest)).toBe(true);
})
test('hasNoValidPriceOrQuantity return true when card contain null on price key', () => {
    let cardTest = [{quantity: 8,item: { name: 'chaise', price: null }}]
    expect(hasNoValidPriceOrQuantity(cardTest)).toBe(true);
})