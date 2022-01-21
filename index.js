const { celciusConvert, fahrenheitConvert } = require('./conversionOperations');

console.log(celciusConvert(0));
console.log(fahrenheitConvert(0));

const {sec_min, min_hour, hour_min, min_sec, hour_sec, sec_hour} = require('./conversionOperations/Time')


console.log(sec_min(360))
console.log(min_hour(100))
console.log(hour_min(2))
console.log(min_sec(10))
console.log(sec_hour(100))
console.log(hour_sec(1))