var express = require('express');
var app=express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


app.use (bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json())

const news = require ('./routers/News.js');
app.use ("/news", news);

// var feedparser = require('ortoo-feedparser');
const feedparser = require('feedparser-promised');

const NewsModel = require ('./Model/News')

var aaaa="a";

//hot
var urlHot="https://thanhnien.vn/rss/viet-nam/phap-luat.rss";
const intervalHot = setInterval(function() {
    feedparser.parse(urlHot).then(items => { 
        // var i=0;
        items.some(function(item,i){
            let title=""




            NewsModel.find({hot:true}, (err, result)=>{
                // title=result[0].title;
                if (item.title==result[0].title)
                {
                    console.log("No")
                }
                else
                {
                    var data= item.description.split('src="');
                    var image=data[1].split('"')[0]
                    var newsModel = new NewsModel ({
                        soure:1,
                        category:2,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:"",
                        pubDate:item.pubDate,
                        hot:true,
                        image:image
                    })
                    result[0].hot=false;
                    result[0].save();
                    newsModel.save()
                    console.log("Oke")
                }

            })
            if (i==0)
            {
                return true;
            }
            console.log (item.title)
        });
    });
      }, 10000);
//thanhnien
var url="https://video.thanhnien.vn/rss/thoi-su.rss";
// const interval = setInterval(function() {
//     feedparser.parse(url).then(items => { 
//         // var i=0;
//         items.some(function(item,i){
//             // data.push(item)
            
//             var newsModel = new NewsModel ({
//                 soure:1,
//                 category:2,
//                 type:1,
//                 title:item.title,
//                 link:item.link,
//                 description:item.description,
//                 pubDate:item.pubDate,
//                 hot:false
//             })
//             newsModel.save()
//             // newsModel.save();
//             if (i==5)
//             {
//                 return true;
//             }
//             console.log(i)
            
//         });
//     });
//   }, 500000);
//   clearInterval(interval);
 

mongoose.connect(
    "mongodb+srv://quansean1:150598bd!@2-news-p0npb.mongodb.net/test?retryWrites=true&w=majority",
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