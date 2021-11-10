'use strict';
const Hotel= require('../models/hotel');

// add  new places to database
const store=(req, res, next) =>{
    let hotel=new Hotel({
        name:req.body.name,
        location:req.body.location,
        description:req.body.description,
        price_per_room:req.body.price_per_room,
        number_of_room:req.body.number_of_room

    })
    if(req.file){
        hotel.avatar=req.file.path
    }
    hotel.save()
    .then(response =>{
        res.json({
            message:'Hotel added successfully' 
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}

const showp=(req, res, next) =>{
    Hotel.find()
    .then(response =>{
        res.json({
            response       
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}

const destroyp=(req, res, next) =>{
    let placeid=req.body._id
    Hotel.findByIdAndRemove(placeid)
    .then(response =>{
        res.json({       
            message:'Deleted Successfully'          
        })
        fs.unlinkSync(response.avatar)
        
    })
    .catch(error =>{
        res.json({
            message:'An Error Occured!'
        })
    })
    
}

//update specific hotel
const updateh=(req, res, next) =>{
    let hotel_id=req.body._id
    let updatedData={
        name:req.body.name,  
        location:req.body.location,
        description:req.body.description, 
        price_per_room:req.body.price_per_room,    
    }
    if(req.file){
        updatedData.avatar=req.file.path
    }   
    Hotel.findByIdAndUpdate(hotel_id,{$set:updatedData})
    .then(response =>{
        res.json({
            message:'Hotel updated successfully' 
        })
        fs.unlinkSync(response.avatar)       
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}


module.exports= {store,showp,destroyp, updateh}