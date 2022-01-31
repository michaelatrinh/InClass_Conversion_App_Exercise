const { celciusConvert, fahrenheitConvert, bmi, cadTohkd, hkdTocad, pound, inches, centimeters} = require('../conversionOperations/index');
var id = 1;
var tests = [];

const getBMI = (req, res) => {
  // console.log(req.query)
  var q = req.query
  res.send(bmi(q.kg,q.m))
}

const getCadToHkd = (req, res) => {
  var q = req.query
  res.sendStatus(cadTohkd(q.cad))
}

const getHkdToCad = (req, res) => {
  var a = req.query
  res.sendStatus(hkdTocad(a.hkd))
}

const getWeight = (req, res) => {
  var q = req.query
  res.send(pound(q.kg))
}

const getCm = (req, res) => {
  var q = req.query
  res.send(centimeters(q.inch))
}

const getInch = (req, res) => {
  var q = req.query
  res.send(inches(q.cm))
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
  getBMI,
  getCadToHkd,
  getHkdToCad,
  getWeight,
  getCm,
  getInch,
}