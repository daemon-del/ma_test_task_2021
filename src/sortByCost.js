function sortByCost(array) {
    const sortedArr = array.sort(function (a, b) {
        const firstCost = a.pricePerKilo || a.pricePerItem;
        const secondCosr = b.pricePerKilo || b.pricePerItem;
        return +firstCost.slice(1).replace(',','.') - +secondCosr.slice(1).replace(',','.');
    });

    return sortedArr;
}

module.exports = {
    sortByCost,
};
