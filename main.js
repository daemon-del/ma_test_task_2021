// Your code should:
// - Validate the data according to the following rules: item: string,  type: string, weight: number, quantity: number, pricePerKilo: “$” + number - string,  pricePerItem: “$” + number - string ;
// - Print to the console the total quantity of all watermelons (Watermelons - ${quantity});
// - Print to the console the total weight of all apples (Apples - ${weight});
// - Sort the array in alphabetical order by item field and print it to the console;
// - Sort the array by cost of the record and print it to the console;
// - Print to the terminal the type of oranges with the least price (The cheapest orange type is: ${type});
// - Print to the console the cost of the goods by item name (Apples - ${costApples}, Pineapples - ${costPineapples}, Watermelons - ${costWatermelons}, Oranges - ${costOranges});
// - Print to the console the result of the execution of this function;

const { goods } = require('./src/goods');
const { validator } = require('./src/validator');
const { goodsCounter } = require('./src/goodsCounter');
const { sortByAlphabet } = require('./src/sortByAlphabet');
const { sortByCost } = require('./src/sortByCost');

const validatedGoods  = validator(goods);

const countedGoods = goodsCounter(validatedGoods);

console.log(countedGoods);
console.log('---');

const sortedCost = sortByCost(validatedGoods);

console.log(sortedCost);
console.log('---');

const sortedAlphabet = sortByAlphabet(validatedGoods);

console.log(sortedAlphabet);
