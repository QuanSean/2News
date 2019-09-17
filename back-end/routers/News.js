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

.get ('/new', (req, res)=>{
    NewsMoel.find({hot:false}, (err,result)=>{

        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
        var datas=[]
        for (i=0;i<data.length;i++)
        {
            datas.push(data[i]);
            if (i==19)
            {
                break;
            }
        }
       res.json(datas)
    })
})

.get('/delete',(req,res)=>{
    NewsMoel.find({hot:false},(err,result)=>{

    })
})



module.exports=router;