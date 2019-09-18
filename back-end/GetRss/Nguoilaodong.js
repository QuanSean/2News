const feedparser = require('feedparser-promised');

const NewsModel = require ('../Model/News')
function getRss(){

    // 3 Thời sự
    var url="https://nld.com.vn/thoi-su.rss";
    const intervalThoiSu = setInterval(function() {
        feedparser.parse(url).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:3},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/130_200", "thumb_w/684");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:3,
                            sourename:"Người lao động",
                            category:3,
                            type:1,
                            title:item.title,
                            link:item.link,
                            description:item.description,
                            pubDate:item.pubDate,
                            image:image,
                            hot:false
                        })   
                        newsModel.save();

                    }
                })
    
    
                // data.push(item)
               
                // newsModel.save()
                if (i==5)
                {
                    return true;
                }
                // console.log(i)
                
            });
        });
      }, 90000);
    //   4 Thế giới
    var urlThegioi="https://nld.com.vn/thoi-su-quoc-te.rss";
    const intervalThegioi = setInterval(function() {
        feedparser.parse(urlThegioi).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:3},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/130_200", "thumb_w/684");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:3,
                            sourename:"Người lao động",
                            category:4,
                            type:1,
                            title:item.title,
                            link:item.link,
                            description:item.description,
                            pubDate:item.pubDate,
                            image:image,
                            hot:false
                        })   
                        newsModel.save();

                    }
                })
                if (i==5)
                {
                    return true;
                }
            });
        });
      }, 90000);
    //   5 Văn hoá
    var urlVanhoa="https://nld.com.vn/van-nghe.rss";
    const intervalVanhoa = setInterval(function() {
        feedparser.parse(urlVanhoa).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:3},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/130_200", "thumb_w/684");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:3,
                            sourename:"Người lao động",
                            category:5,
                            type:1,
                            title:item.title,
                            link:item.link,
                            description:item.description,
                            pubDate:item.pubDate,
                            image:image,
                            hot:false
                        })   
                        newsModel.save();
                    }
                })
                if (i==5)
                {
                    return true;
                }
                
            });
        });
      }, 90000);
    //   6 Thể thao
    var urlThethao="https://nld.com.vn/the-thao.rss";
    const intervalThethao = setInterval(function() {
        feedparser.parse(urlThethao).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:3},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/130_200", "thumb_w/684");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:3,
                            sourename:"Người lao động",
                            category:6,
                            type:1,
                            title:item.title,
                            link:item.link,
                            description:item.description,
                            pubDate:item.pubDate,
                            image:image,
                            hot:false
                        })   
                        newsModel.save();
                    }
                })
                if (i==5)
                {
                    return true;
                }
            });
        });
      }, 90000);
    //   7 Đời sống
 
    //   8 Tài chính
    
    //   9 Giới trẻ
   
    //   10 Giáo dục
    var urlGiaoduc="https://nld.com.vn/giao-duc-khoa-hoc.rss";
    const intervalGiaoduc = setInterval(function() {
        feedparser.parse(urlGiaoduc).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:3},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/130_200", "thumb_w/684");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:3,
                            sourename:"Người lao động",
                            category:10,
                            type:1,
                            title:item.title,
                            link:item.link,
                            description:item.description,
                            pubDate:item.pubDate,
                            image:image,
                            hot:false
                        })   
                        newsModel.save();
                    }
                })
                if (i==5)
                {
                    return true;
                }
            });
        });
      }, 90000);
    //   11 Công nghệ
    var urlCongnghe="https://tuoitre.vn/rss/nhip-song-so.rss";
    const intervalCongnghe = setInterval(function() {
        feedparser.parse(urlCongnghe).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:3},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/130_200", "thumb_w/684");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:3,
                            sourename:"Người lao động",
                            category:11,
                            type:1,
                            title:item.title,
                            link:item.link,
                            description:item.description,
                            pubDate:item.pubDate,
                            image:image,
                            hot:false
                        })   
                        newsModel.save();

                    }
                })
    
    
                // data.push(item)
               
                // newsModel.save()
                if (i==5)
                {
                    return true;
                }
                // console.log(i)
                
            });
        });
      }, 90008);
    //   12 Game
   
    //   13 Sức khoẻ
    var urlSuckhoe="https://nld.com.vn/suc-khoe.rss";
    const intervalSuckhoe = setInterval(function() {
        feedparser.parse(urlSuckhoe).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:3},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/130_200", "thumb_w/684");
                        var newsModel = new NewsModel ({
                            soure:3,
                            sourename:"Người lao động",
                            category:13,
                            type:1,
                            title:item.title,
                            link:item.link,
                            description:item.description,
                            pubDate:item.pubDate,
                            image:image,
                            hot:false
                        })   
                        newsModel.save();
                        console.log(newsModel)
                    }
                })
                if (i==5)
                {
                    return true;
                }
            });
        });
      }, 90000);
    //   14 Du lịch	
 
    //   15 Xe
  
}
module.exports=getRss