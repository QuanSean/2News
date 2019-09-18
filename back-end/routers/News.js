const express = require('express');
const router = express.Router();
const feedparser = require('feedparser-promised');
const News= require('../Model/News')
const NewsMoel= require('../Model/News')
const NewsController = require('../Controller/News')
router
.get('/', (req, res)=>{
    NewsController.getHot((err,result)=>{
        if (res)
        {
            res.json(result)
            // console.log(res)
        }
    });
})

.get ('/new', (req, res)=>{
    NewsController.getNew((err,result)=>{
        if (err)
        {
            res.json({
                result: false,
                detail: "query error"
            })
        }
        else
        {
            res.json(result)
            console.log(result.length)
        }
    })
})

.get('/delete',(req,res)=>{
    NewsMoel.find({hot:false},(err,result)=>{

    })
})
.get('/thoisuhome',(req,res)=>{
    NewsMoel.find({category:3},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
        var datas=[]
        for (i=0;i<data.length;i++)
        {
            datas.push(data[i]);
            if (i==4)
            {
                break;
            }
        }
       res.json(datas)
    })

})
.get('/thethaohome',(req,res)=>{
    NewsMoel.find({category:6},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
        var datas=[]
        for (i=0;i<data.length;i++)
        {
            datas.push(data[i]);
            if (i==4)
            {
                break;
            }
        }
       res.json(datas)
    })

})

// 3 Thời sự
.get('/thoisu',(req,res)=>{
    NewsMoel.find({category:3},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
       res.json(data)
    })

})

// 4 Thế giới
.get('/thegioi',(req,res)=>{
    NewsMoel.find({category:4},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
        
       res.json(data)
    })

})
// 5 Văn hoá
.get('/vanhoa',(req,res)=>{
    NewsMoel.find({category:5},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
       res.json(data)
    })

})
// 6 Thể thao
.get('/thethao',(req,res)=>{
    NewsMoel.find({category:6},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
        
       res.json(data)
    })

})
// 7 Đời sống
.get('/doisong',(req,res)=>{
    NewsMoel.find({category:7},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
       res.json(data)
    })

})
// 8 Tài chính
.get('/taichinh',(req,res)=>{
    NewsMoel.find({category:8},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
        
       res.json(data)
    })

})
// 9 Giới trẻ
.get('/gioitre',(req,res)=>{
    NewsMoel.find({category:9},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
       
       res.json(data)
    })

})
// 10 Giáo dục
.get('/giaoduc',(req,res)=>{
    NewsMoel.find({category:10},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
        
       res.json(data)
    })

})
// 11 Công nghệ
.get('/congnghe',(req,res)=>{
    NewsMoel.find({category:11},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
        
       res.json(data)
    })

})
// 12 Game
.get('/game',(req,res)=>{
    NewsMoel.find({category:12},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
        
       res.json(data)
    })

})
// 13 Sức khoẻ
.get('/suckhoe',(req,res)=>{
    NewsMoel.find({category:13},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
       res.json(data)
    })

})
// 14 Du lịch	
.get('/dulich',(req,res)=>{
    NewsMoel.find({category:14},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });
       
       res.json(data)
    })

})
// 15 Xe
.get('/xe',(req,res)=>{
    NewsMoel.find({category:15},(err, result)=>{
        var data= result.sort(function(a,b){
            var c = new Date(a.pubDate);
            var d = new Date(b.pubDate);
            return d-c;
            });

       res.json(data)
    })

})


module.exports=router;