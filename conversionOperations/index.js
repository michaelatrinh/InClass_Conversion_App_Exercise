const celciusConvert = require('./temperature/CtoF.js');
const fahrenheitConvert = require('./temperature/FtoC.js');
const bmi = require('./Bmi/bmi');
const cadTohkd = require('./Currency/currency.js');
const hkdTocad = require('./Currency/currency.js');
const pound = require('./Weight/weight.js');

module.exports = {
  celciusConvert,
  fahrenheitConvert,
  bmi,
  cadTohkd,
  hkdTocad,
  pound,
}