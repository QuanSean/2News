const mongoose = require ('mongoose');
let Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const PostSchema = mongoose.Schema({
    soure:Number,
    category:Number,
    type:Number,
    title:String,
    link:String,
    description:String,
    pubDate:Date,
    hot:Boolean,
    image:String

});
module.exports=mongoose.model ('News',PostSchema);