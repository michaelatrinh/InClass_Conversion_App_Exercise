const { celciusConvert, fahrenheitConvert, bmi, cadTohkd, hkdTocad, pound, inches, centimeters} = require('../conversionOperations/index');
var id = 1;
var tests = [];

const getBMI = (req, res) => {
  console.log(req.query)
  let q = req.query
  res.send(bmi(q.kg,q.m))
}

const addNewTest = (req, res) => {
  const newTest = {...req.body, id: id++};
  tests.push(newTest);
  res.status(201).json(newTest);
}

const searchTests = (req, res) => {
  let test = tests.filter(item => item.id == req.params.id);
  res.json(test);
}

module.exports = {
  addNewTest,
  searchTests,
  getBMI
}