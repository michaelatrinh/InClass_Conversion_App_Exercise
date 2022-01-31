const express = require('express');
const router = express.Router();
const {
    getBMI, 
    addNewTest, 
    searchTests, 
    getCadToHkd, 
    getHkdToCad,
    getWeight,
    getCm,
    getInch,
} = require('../controller/test');

router.get('/bmi', getBMI);

router.get('/currency/hkd', getCadToHkd);
router.get('/currency/cad', getHkdToCad);

router.get('/inch', getInch);
router.get('/cm', getCm);

router.get('/pound', getWeight);

router.post('/new/test', addNewTest);

router.get('/test/:id', searchTests);

module.exports = router;