const { celciusConvert, fahrenheitConvert, bmi, cadTohkd, hkdTocad} = require('./conversionOperations');
const {sec_min, min_hour, hour_min, min_sec, hour_sec, sec_hour} = require('./conversionOperations/Time');

// temperature conversion
console.log(celciusConvert(0));
console.log(fahrenheitConvert(0));

// time conversion
console.log(sec_min(360))
console.log(min_hour(100))
console.log(hour_min(2))
console.log(min_sec(10))
console.log(sec_hour(100))
console.log(hour_sec(1))

//First input is weight in kg, 2nd input is height in meters.
console.log(bmi(57,1.71))

// cad to hkd and hkd to cad
console.log(cadTohkd(6));
console.log(hkdTocad(36));

