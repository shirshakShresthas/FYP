'use strict';
const Trekking= require('../models/trekking');

// add  new places to database
const storet=(req, res, next) =>{
    let trekking=new Trekking({
        name:req.body.name,
        location:req.body.location
    })
    if(req.file){
        trekking.avatar=req.file.path
    }
    trekking.save()
    .then(response =>{
        res.json({
            message:'Trekking place added successfully' 
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}

const showt=(req, res, next) =>{
    Trekking.find()
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

const destroyt=(req, res, next) =>{
    let trekking_id=req.body._id
    Trekking.findByIdAndRemove(trekking_id)
    .then(response =>{
        res.json({       
            message:'Trekking Place Deleted Successfully'          
        })
        fs.unlinkSync(response.avatar)
    })
    .catch(error =>{
        res.json({
            message:'An Error Occured!'
        })
    })
    
}

//update specific trekking place
const updatet=(req, res, next) =>{
    let trekking_id=req.body._id
    let updatedData={
        name:req.body.name,
        location:req.body.location
    }
    if(req.file){
        updatedData.avatar=req.file.path
    }   
    Trekking.findByIdAndUpdate(trekking_id,{$set:updatedData})
    .then(response =>{
        res.json({
            message:'Trekking place updated successfully' 
        })
        fs.unlinkSync(response.avatar)       
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}

module.exports= {storet,showt,destroyt, updatet}