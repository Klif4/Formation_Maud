const getQuantityAndPriceOfObjects = (card) => {
    if (isEmpty(card)) throw 'Your card is empty';
    return card.map(object => {
      return {"quantity" : object.quantity, "price" : object.item.price};
    });
}

const isEmpty = (array) => {
  return array.length===0;
}