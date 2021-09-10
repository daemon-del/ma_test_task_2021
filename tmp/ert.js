// let sosa2 = [
//     {'name': 'Dima', 'prase': '23'},
//     {'name': 'sosiska', 'prase': '50'},
//     {'name': 'gitomir', 'prase':'44'},
//     {'name': 'kakshka', 'prase':'45'},
//     {'name': 'lola', 'prase':'58'},
// ];
//  const result = sosa2.sort( function (a, b){
//      return +a.prase - +b.prase;
// })
// const result2 = sosa2.sort( function (a, b){
//     return +b.prase - +a.prase;
// })
//
// console.log(result2);

const arr = [
    {"item":"apple","type":"Fuji","weight":10,"pricePerKilo":"$3"},
    {"item":"orange","type":"Clementine","weight":6,"pricePerKilo":"$7"},
    {"item":"watermelon","type":"Nova","quantity":1,"pricePerItem":"$5"},
    {"item":"orange","type":"Navel","weight":6,"pricePerKilo":"$7"},
    {"item":"pineapple","type":"Queen","quantity":4,"pricePerItem":"$15"},
    {"item":"pineapple","type":"Pernambuco","quantity":3,"pricePerItem":"$12"},
    {"item":"apple","type":"Cameo","weight":6,"pricePerKilo":"$7"},
    {"item":"watermelon","type":"Trio","quantity":2,"pricePerItem":"$9"},
    {"item":"pineapple","type":"Red Spanish","quantity":3,"pricePerItem":"$9,99"},
    {"item":"watermelon","type":"Millionaire","quantity":2,"pricePerItem":"$7"},
    {"item":"orange","type":"Tangerine","weight":4,"pricePerKilo":"$4,99"},
    {"item":"apple","type":"Jazz","weight":4,"pricePerKilo":"$5"},
];

// const aa = sosa3.sort ( function (a, b) {
//     return +a.prase.slice(1).replace(',', '.') - +b.prase.slice(1).replace(',', '.');
// })
//
//  console.log(aa);

const aa = arr.sort(function (a, b){
    const firstCost = a.pricePerKilo || a.pricePerItem;
    const secondCosr = b.pricePerKilo || b.pricePerItem;
    return +firstCost.slice(1).replace(',','.') - +secondCosr.slice(1).replace(',','.');
})

console.log(aa);
