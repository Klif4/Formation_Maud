const sortCardByQuantities = (card) => {
    if (hasNoValidQuantity(card)) throw "invalid quantity"
    card.sort(function (objectActual, objectToCompare) {
        return objectActual.quantity - objectToCompare.quantity
    })
    return card;
}

const hasNoValidQuantity = (array) => {
    let result = false;
    array.forEach(element => {
        if (element.quantity === null || typeof(element.quantity) === "string" || isNaN(element.quantity)) result = true;
    });
    return result; 
}

module.exports = {sortCardByQuantities, hasNoValidQuantity};