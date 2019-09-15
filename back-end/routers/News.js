const express = require('express');
const router = express.Router();
const feedparser = require('feedparser-promised');
const News= require('../Model/News')
const NewsMoel= require('../Model/News')
router
.get('/', (req, res)=>{
    NewsMoel.find({hot:true},(err, result)=>{
        res.json(result)
    })
})



module.exports=router;