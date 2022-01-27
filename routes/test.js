const express = require('express');
const router = express.Router();
const { getTests, addNewTest, searchTests } = require('../controller/test');

router.get('/test', getTests);

router.post('/new/test', addNewTest);

router.get('/test/:id', searchTests);

module.exports = router;