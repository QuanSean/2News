const feedparser = require('feedparser-promised');

const NewsModel = require ('../Model/News')
function getRss(){

    // 3 Thời sự
    var url="https://tuoitre.vn/rss/thoi-su.rss";
    const intervalThoiSu = setInterval(function() {
        feedparser.parse(url).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:2},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/80_50", "thumb_w/586");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:2,
                            sourename:"Tuổi trẻ",
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
      }, 90001);
    //   4 Thế giới
    var urlThegioi="https://tuoitre.vn/rss/the-gioi.rss";
    const intervalThegioi = setInterval(function() {
        feedparser.parse(urlThegioi).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:2},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/80_50", "thumb_w/586");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:2,
                            sourename:"Tuổi trẻ",
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
                        console.log(newsModel)

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
      }, 90002);
    //   5 Văn hoá
    var urlVanhoa="https://tuoitre.vn/rss/van-hoa.rss";
    const intervalVanhoa = setInterval(function() {
        feedparser.parse(urlVanhoa).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:2},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/80_50", "thumb_w/586");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:2,
                            sourename:"Tuổi trẻ",
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
    
    
                // data.push(item)
               
                // newsModel.save()
                if (i==5)
                {
                    return true;
                }
                // console.log(i)
                
            });
        });
      }, 90003);
    //   6 Thể thao
    var urlThethao="https://tuoitre.vn/rss/the-thao.rss";
    const intervalThethao = setInterval(function() {
        feedparser.parse(urlThethao).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:2},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/80_50", "thumb_w/586");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:2,
                            sourename:"Tuổi trẻ",
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
    
    
                // data.push(item)
               
                // newsModel.save()
                if (i==5)
                {
                    return true;
                }
                // console.log(i)
                
            });
        });
      }, 90004);
    //   7 Đời sống
 
    //   8 Tài chính
    var urlTaichinh="https://tuoitre.vn/rss/kinh-doanh.rss";
    const intervalTaichinh = setInterval(function() {
        feedparser.parse(urlTaichinh).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:2},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/80_50", "thumb_w/586");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:2,
                            sourename:"Tuổi trẻ",
                            category:8,
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
      }, 90005);
    //   9 Giới trẻ
    var urlGioitre="https://tuoitre.vn/rss/nhip-song-tre.rss";
    const intervalGioitre = setInterval(function() {
        feedparser.parse(urlGioitre).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:2},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/80_50", "thumb_w/586");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:2,
                            sourename:"Tuổi trẻ",
                            category:9,
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
      }, 90006);
    //   10 Giáo dục
    var urlGiaoduc="https://tuoitre.vn/rss/giao-duc.rss";
    const intervalGiaoduc = setInterval(function() {
        feedparser.parse(urlGiaoduc).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:2},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/80_50", "thumb_w/586");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:2,
                            sourename:"Tuổi trẻ",
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
    
    
                // data.push(item)
               
                // newsModel.save()
                if (i==5)
                {
                    return true;
                }
                // console.log(i)
                
            });
        });
      }, 90007);
    //   11 Công nghệ
    var urlCongnghe="https://tuoitre.vn/rss/nhip-song-so.rss";
    const intervalCongnghe = setInterval(function() {
        feedparser.parse(urlCongnghe).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:2},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/80_50", "thumb_w/586");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:2,
                            sourename:"Tuổi trẻ",
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
    var urlSuckhoe="https://tuoitre.vn/rss/suc-khoe.rss";
    const intervalSuckhoe = setInterval(function() {
        feedparser.parse(urlSuckhoe).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:2},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/80_50", "thumb_w/586");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:2,
                            sourename:"Tuổi trẻ",
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
      }, 90009);
    //   14 Du lịch	
    var urlDulich="https://tuoitre.vn/rss/du-lich.rss";
    const intervalDulich = setInterval(function() {
        feedparser.parse(urlDulich).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:2},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/80_50", "thumb_w/586");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:2,
                            sourename:"Tuổi trẻ",
                            category:14,
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
      }, 90010);
    //   15 Xe
    var urlXe="https://tuoitre.vn/rss/xe.rss";
    const intervalXe= setInterval(function() {
        feedparser.parse(urlXe).then(items => { 
            items.some(function(item,i){
    
                var dt=[];
                NewsModel.find({title:item.title,soure:2},(err,res)=>{
                    if (res.length>0)
                    {
                        console.log ("no")
                    }
                    else
                    {
                        // console.log(res)
                        var data= item.description.split('src="');
                        var im=data[1].split('"')[0];
                        var image = im.replace("zoom/80_50", "thumb_w/586");
            
                        // // console.log(image);
                        var newsModel = new NewsModel ({
                            soure:2,
                            sourename:"Tuổi trẻ",
                            category:15,
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
      }, 90011);
  
}
module.exports=getRss