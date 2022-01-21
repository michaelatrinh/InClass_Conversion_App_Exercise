const { celciusConvert, fahrenheitConvert, bmi, cadTohkd, hkdTocad} = require('./conversionOperations');

console.log(celciusConvert(0));
console.log(fahrenheitConvert(0));

//First input is weight in kg, 2nd input is height in meters.
console.log(bmi(57,1.71))

console.log(cadTohkd(6));
console.log(hkdTocad(36));