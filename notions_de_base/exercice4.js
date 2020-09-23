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

const hasNoValidPriceOrQuantity = (array) => {
    let result = false;
    array.forEach(object => {
        if (isNaN(object.quantity) || isNaN(object.item.price) || object.quantity === null || object.item.price === null || typeof(object.quantity) === "string" || typeof(object.item.price) === "string") {
            result = true;
        };
    });
    return result;
}

const card = [
    {
      quantity: 8,
      item: {
        name: 'chaise',
        price: 10,
      }
    },
    {
      quantity: 2,
      item: {
        name: 'table',
        price: 50,
      }
    },
    {
      quantity: 1,
      item: {
        name: 'canape',
        price: 200,
      }
    }
  ]

  try {
      
    console.log(getTheBill(card));
  } catch (error) {
      console.log(error);
  }