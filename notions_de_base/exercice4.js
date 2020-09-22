const getTotalPrice = (card) => {
    if (isEmpty(card)) throw "Your card is empty";
    let finalBill = 0;
    card.map(object => {
        if (hasNoPriceOrQuantity(object.quantity)) throw "the object " + object.item.name + ' has no quantity, your card has been cancelled';
        if (hasNoPriceOrQuantity(object.item.price)) throw "the object " + object.item.name + ' has no price, your card has been cancelled';
        finalBill += object.quantity * object.item.price;
    })
    return finalBill;
}

const isEmpty = (array) => {
    return array.length === 0;
}
const hasNoPriceOrQuantity = (objectProperty) => {
    return objectProperty === null || objectProperty === undefined || isNaN(objectProperty);
}