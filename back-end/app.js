var express = require('express');
var app=express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


app.use (bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const news = require ('./routers/News.js');
app.use ("/news", news);

// var feedparser = require('ortoo-feedparser');
const feedparser = require('feedparser-promised');

const NewsModel = require ('./Model/News')

//Thanh nien
var thanhnien= require('./GetRss/Thanhnien')
var thanhnienRss=thanhnien();

// //Tuoi tre
var tuoitre= require('./GetRss/Tuoitre')
var tuoitreRss=tuoitre();

// //Nguoi lao dong

var nguoilaodong= require('./GetRss/Nguoilaodong')
var nguoilaodongRss=nguoilaodong();

mongoose.connect(
    "mongodb+srv://quansean1:150598bd!@2-news-p0npb.mongodb.net/data?retryWrites=true&w=majority",
    {   useNewUrlParser: true,
        useUnifiedTopology: true },
    (err, success) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected mongodb News");
      }
    }
  );



// app.get ('/', (req,res)=>{
//     request("https://video.thanhnien.vn/rss/thoi-su.rss",(err,response,body)=>{
//         if (err)
//         {
//             res.send(err);
//         }
//         else
//         {
//             $ = cheerio.load(body)
//             var ds=$(body).find ("item title")
//             // ds.each(function(i,error){
//             //     console.log (i)
//             // });
//             ds.each(function(stt, e){
//                 console.log(e);

//             })
//             // console.log (ds);
//             res.send(body)
//         }
//     })
// })



app.listen(process.env.PORT || 2409,(err, success)=>{
    if (err)
    {
        console.log (err)
    }
    else 
    {
        console.log ("Listen port 2049")
    }
});