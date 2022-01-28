const express = require('express')
const router = express.Router()
const {sec_min, min_hour, hour_min, min_sec, hour_sec, sec_hour} = require('../conversionOperations/Time')


router.get("/convert/hour_min/:time", (req,res)=>{
    res.send(String(hour_min(req.params.time)))
})

router.get("/convert/hour_sec/:time", (req,res)=>{
    res.send(String(hour_sec(req.params.time)))
})

router.get("/convert/sec_min/:time", (req,res)=>{
    res.send(String(sec_min(req.params.time)))
})

router.get("/convert/sec_hour/:time", (req,res)=>{
    res.send(String(sec_hour(req.params.time)))
})

router.get("/convert/min_hour/:time", (req,res)=>{
    res.send(String(min_hour(req.params.time)))
})

router.get("/convert/min_sec/:time", (req,res)=>{
    res.send(String(min_sec(req.params.time)))
})

module.exports = router