function goodsCounter(array) {
    let watermelonQuantity = 0;
    let appleWeight = 0;
    let orangeLeastPrice = 0;
    let orangeLeastType = '';
    let applesPrice = 0;
    let pineapplesPrice = 0;
    let watermelonsPrice = 0;
    let orangesPrice = 0;

    array.forEach((element) => {
        const item = element.item;
        const type = element.type;
        const quantity = element.quantity;
        const weight = element.weight;
        const pricePerKilo = element.pricePerKilo;
        const pricePerItem = element.pricePerItem;

        let price = 0;

        if (typeof pricePerKilo !== 'undefined') {
            price = +pricePerKilo.slice(1).replace(',', '.');
        } else {
            price = +pricePerItem.slice(1).replace(',', '.');
        }

        if (item === 'watermelon') {
            watermelonQuantity += quantity || 0;
            watermelonsPrice += price;
        }

        if (item === 'apple') {
            appleWeight += weight || 0;
            applesPrice += price;
        }

        if (item === 'pineapple'){
            pineapplesPrice += price;
        }

        if (item === 'orange') {
            if (orangeLeastPrice === 0) {
                orangeLeastPrice = price;
                orangeLeastType = type;
            }

            if (price < orangeLeastPrice){
                orangeLeastPrice = price;
                orangeLeastType = type;
            }

            orangesPrice += price;
        }
    })

    return { appleWeight, watermelonQuantity, orangeLeastType, pineapplesPrice, applesPrice, watermelonsPrice, orangesPrice };
}

module.exports = {
    goodsCounter,
};
