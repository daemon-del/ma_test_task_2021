function validator(array) {
    const newArr = array.filter((item) => {
        return (
            typeof item.item === 'string' &&
            typeof item.type === 'string' &&
            (typeof item.weight === 'number' || typeof item.quantity === 'number') &&
            (
                (typeof item.pricePerKilo !== 'undefined' && item.pricePerKilo[0] === '$' && typeof +item.pricePerKilo.slice(1).replace(',' , '.') === 'number'   ) ||
                (typeof  item.pricePerItem !== 'undefined' && item.pricePerItem[0] === '$' &&  typeof +item.pricePerItem.slice(1).replace(',' , '.') === 'number'  )
            )
        );
    });

    return newArr;
}

module.exports = {
    validator,
};
