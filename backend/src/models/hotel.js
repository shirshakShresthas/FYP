const mongoose=require('mongoose');
const Schema=mongoose.Schema

const newPlace=new Schema({
    name:{
        type:String
    },
    location:{
        type:String
    },
    description:{
        type:String
    },
    price_per_room:{
        type:Number,
        required:true 
    },
    number_of_room:{
        type:Number,
        required:true 
    },
    avatar:{
        type:String
    }
},{timestamps:true})

const NewPlace=mongoose.model('NewPlace',newPlace)
module.exports=NewPlace