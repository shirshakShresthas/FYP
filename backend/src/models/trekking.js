const mongoose=require('mongoose');
const Schema=mongoose.Schema

const trekking=new Schema({
    name:{
        type:String
    },
    location:{
        type:String
    },
    avatar:{
        type:String
    }
},{timestamps:true})

const Trekking=mongoose.model('Trekking',trekking)
module.exports=Trekking