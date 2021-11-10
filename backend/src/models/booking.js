const mongoose=require('mongoose');
const Schema=mongoose.Schema

const booking=new Schema({
    hotel_id:{
        type:String,
       
    },
    user_id:{
        type:String,
        
    },
    start_date:{
        type:Date,
        
    },
    end_date:{
        type:Date,
           
    },
    no_of_room:{
        type:Number,
        
    },
    paymentType:{
        type:String,
       
    },
    amount:{
        type:Number,
       
    }
},{timestamps:true})

const Booking=mongoose.model('Booking',booking)
module.exports=Booking