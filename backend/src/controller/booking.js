'use strict';
const HotelBooking=require('../models/booking');

//show the list of booking
const show=(req, res, next) =>{
    HotelBooking.find()
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

// add  new booking
const storeb=(req, res, next) =>{
    let hotelBooking=new HotelBooking({
        hotel_id:req.body.hotel_id,
        user_id:req.body.user_id,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        no_of_room:req.body.no_of_room,
        paymentType:req.body.paymentType,
        amount:req.body.amount,
    })
    hotelBooking.save()
    .then(response =>{
        res.json({
            message:'Accomodation Booked successfully' 
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}

//check whether  specific user has booked hotel or not 
const checkUserBooking=(req, res, next) =>{
    //HotelBooking.find({$and:[{"hotel_id":1},{"user_id":1}]}).count()
    let hotel_id=req.body.hotel_id
    let user_id=req.body.user_id
    HotelBooking.find({$and:[{"hotel_id":hotel_id},{"user_id":user_id}]})
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


module.exports={
    show, storeb, checkUserBooking
}