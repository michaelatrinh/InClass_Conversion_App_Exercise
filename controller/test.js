var id = 1;
var tests = [];

const getTests = (req, res) => {
  res.json(tests)
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
  getTests,
  addNewTest,
  searchTests
}