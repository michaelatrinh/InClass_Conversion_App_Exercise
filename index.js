const { celciusConvert, fahrenheitConvert, bmi, cadTohkd, hkdTocad, pound, inches, centimeters} = require('./conversionOperations');

const express = require('express');
const app = express();
const testRouter = require('./routes/test');

app.use(express.json());
app.use(testRouter);
app.listen(3001, () => console.log("Server running on 3001"));


console.log(celciusConvert(0));
console.log(fahrenheitConvert(0));

//First input is weight in kg, 2nd input is height in meters.
console.log(bmi(57,1.71))

console.log(cadTohkd(6));
console.log(hkdTocad(36));

console.log(pound(10));

console.log(inches(10));
console.log(centimeters(10));