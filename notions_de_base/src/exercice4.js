const getTheBill = (card) => {
    if (isEmpty(card)) throw "Your card is empty";
    if (hasNoValidPriceOrQuantity(card)) throw "Price or quantity missing on one object";
    let finalBill = 0;
    card.forEach(object => {
        finalBill += object.quantity * object.item.price;
    });
    return finalBill;
}

const isEmpty = (array) => {
    return array.length === 0;
}

const hasNoValidPriceOrQuantity = (card) => {
    let result = false;
    card.forEach(object => {
        if (isNaN(object.quantity) || isNaN(object.item.price) || object.quantity === null || object.item.price === null || typeof(object.quantity) === "string" || typeof(object.item.price) === "string") {
            result = true;
        };
    });
    return result;
}

module.exports = {getTheBill, isEmpty, hasNoValidPriceOrQuantity};