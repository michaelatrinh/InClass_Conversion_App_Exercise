const express = require('express');
const router = express.Router();
const {getBMI, addNewTest, searchTests } = require('../controller/test');

router.get('/bmi', getBMI);

router.post('/new/test', addNewTest);

router.get('/test/:id', searchTests);

module.exports = router;