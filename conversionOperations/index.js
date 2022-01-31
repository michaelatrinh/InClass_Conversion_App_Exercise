const celciusConvert = require('./temperature/CtoF.js');
const fahrenheitConvert = require('./temperature/FtoC.js');
const bmi = require('./Bmi/bmi');
const cadTohkd = require('./Currency/cadtoHkd.js');
const hkdTocad = require('./Currency/hkdtoCad.js');
const pound = require('./Weight/weight.js');
const inches = require('./inches/inches.js');
const centimeters = require('./inches/centimeters.js')


module.exports = {
  celciusConvert,
  fahrenheitConvert,
  bmi,
  cadTohkd,
  hkdTocad,
  pound,
  inches,
  centimeters
}