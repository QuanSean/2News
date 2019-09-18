const express = require('express');
const router = express.Router();
const NewsMoel= require('../Model/News')
let news={
    getHot:async(callback)=>{
        NewsMoel.find({hot:true,category:1},(err, result)=>{
            if (err)
            {
                callback(true, null)
            }
            else
            {
                callback(false,result)
            }
        
        })
    },
    getNew:async(callback)=>{
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
                if (i==59)
                {
                    console.log (i)
                    break;
                }
            }
           callback(false,datas)
        })
    }
}

module.exports=news