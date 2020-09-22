const getObjectList = (caddy) => {
    if (isEmpty(caddy)) throw 'Your caddy is empty';
    let objectList = caddy.map(object => {
      return {"quantity" : object.quantity, "price" : object.item.price};
    });
    return objectList;
}

const isEmpty = (array) => {
  return array.length===0;
}