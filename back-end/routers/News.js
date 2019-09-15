const express = require('express');
const router = express.Router();
const feedparser = require('feedparser-promised');
const News= require('../Model/News')
router
.get('/', (req, res)=>{
    var news= new News ({
        soure:1,
        category:1,
        type:1,
        title:"Demo1",
        link:"Demo1",
        description:"Demo1",
        pubDate:"2019/01/01",
        hot:true
    })

    news.save();
})



module.exports=router;