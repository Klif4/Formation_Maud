const getCardSortByPrice = (card) => {
    if (hasNoValidPrice(card)) throw "Invalid price"
    card.sort(function (actualObject, objectToCompare) {
        return actualObject.item.price - objectToCompare.item.price;
    })
    return card;
}

const hasNoValidPrice = (array) => {
    let result = false;
    array.forEach(object => {
        if (object.item.price === null || isNaN(object.item.price) || typeof (object.item.price) === "string") result = true;
    });
    return result;
}
