const mongoose=require('mongoose');
const Schema=mongoose.Schema

const userSchema=new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    is_admin:{
        type:Boolean,
        default:false
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})

const User=mongoose.model('User',userSchema)
module.exports=User