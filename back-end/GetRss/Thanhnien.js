const feedparser = require('feedparser-promised');

const NewsModel = require ('../Model/News')
function getRss(){

var urlHot="https://thanhnien.vn/rss/home.rss";
const intervalHot = setInterval(function() {
    feedparser.parse(urlHot).then(items => { 
        // var i=0;
        items.some(function(item,i){
            let title=""
            NewsModel.find({title:item.title}, (err,result)=>{
                if (result.length>0)
                {
                    result[0].hot=true;
                    result[0].save
                }
                else
                {
                    NewsModel.find({hot:true,category:1}, (err, result)=>{
                        // title=result[0].title;
                        if (item.title==result[0].title)
                        {
                            console.log("Noaa")
                        }
                        else
                        {
                            var data= item.description.split('src="');
                            var i=data[1].split('"')[0];
                            var image = i.replace("180", "660");
                            var newsModel = new NewsModel ({
                                soure:1,
                                sourename:"Thanh niên",
                                category:1,
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
                }
            })

            
            if (i==0)
            {
                return true;
            }
        });
    });
      }, 30000);



// Thoi su 
var url="https://thanhnien.vn/rss/viet-nam.rss";
const intervalThoiSu = setInterval(function() {
    feedparser.parse(url).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:3,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 90000);

//The gioi

var urlTheGioi="https://thanhnien.vn/rss/the-gioi.rss";
const intervalTheGioi = setInterval(function() {
    feedparser.parse(urlTheGioi).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:4,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 91000);


//Van hoa
var urlVanHoa="https://thanhnien.vn/rss/van-hoa-nghe-thuat.rss";
const intervalVanHoa = setInterval(function() {
    feedparser.parse(urlVanHoa).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:5,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 92000);


//   6 Thể thao

var urlTheThao="https://thethao.thanhnien.vn/rss/home.rss";
const intervalheThao = setInterval(function() {
    feedparser.parse(urlTheThao).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:6,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 93000);

//   7 Đời sống

var urlDoiSong="https://thanhnien.vn/rss/doi-song.rss";
const intervalDoiSong = setInterval(function() {
    feedparser.parse(urlDoiSong).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:7,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 94000);
//   8 Tài chính

var urlTaiChinh="https://thanhnien.vn/rss/kinh-doanh.rss";
const intervalTaiChinh = setInterval(function() {
    feedparser.parse(urlTaiChinh).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:8,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 95000);
//   9 Giới trẻ

var urlGioiTre="https://thanhnien.vn/rss/the-gioi-tre.rss";
const intervaGioiTrel = setInterval(function() {
    feedparser.parse(urlGioiTre).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:9,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 96000);
//   10 Giáo dục

var urlGiaoduc="https://thanhnien.vn/rss/giao-duc.rss";
const intervalGiaoduc = setInterval(function() {
    feedparser.parse(urlGiaoduc).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:10,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 97000);
//   11 Công nghệ

var urlCongNghe="https://thanhnien.vn/rss/cong-nghe-thong-tin.rss";
const intervalCongNghe = setInterval(function() {
    feedparser.parse(urlCongNghe).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:11,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 98000);
//   12 Game

var urlGame="https://game.thanhnien.vn/rss/home.rss";
const intervalGame = setInterval(function() {
    feedparser.parse(urlGame).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:12,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 99000);
//   13 Sức khoẻ

var urlSucKhoe="https://thanhnien.vn/rss/doi-song/suc-khoe.rss";
const intervalSucKhoe = setInterval(function() {
    feedparser.parse(urlSucKhoe).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:13,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 100000);
//   14 Du lịch	

var urlDuLich="https://thanhnien.vn/rss/doi-song/du-lich.rss";
const intervalDuLich = setInterval(function() {
    feedparser.parse(urlDuLich).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:14,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 100001);
//   15 Xe
var urlXe="https://xe.thanhnien.vn/rss/home.rss";
const intervalXe = setInterval(function() {
    feedparser.parse(urlXe).then(items => { 
        items.some(function(item,i){

            var dt=[];
            NewsModel.find({title:item.title},(err,res)=>{
                if (res.length>0)
                {
                    console.log ("no")
                }
                else
                {
                    // console.log(res)
                    var data= item.description.split('src="');
                    var im=data[1].split('"')[0];
                    var image = im.replace("180", "660");
        
                    // console.log(image);
                    var newsModel = new NewsModel ({
                        soure:1,
                        sourename:"Thanh niên",
                        category:15,
                        type:1,
                        title:item.title,
                        link:item.link,
                        description:item.description,
                        pubDate:item.pubDate,
                        image:image,
                        hot:false
                    })
                    newsModel.save()
                    console.log(item.title)                                     
                }
            })


            // data.push(item)
           
            // newsModel.save()
            // newsModel.save();
            if (i==5)
            {
                return true;
            }
            // console.log(i)
            
        });
    });
  }, 100200);




}




module.exports=getRss;