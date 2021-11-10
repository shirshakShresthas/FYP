const express=require('express');
const router=express.Router()

const booking=require('../controller/booking');


router.get('/show', booking.show)
router.get('/checkUserBooking', booking.checkUserBooking)
router.post('/storeb',booking.storeb)
module.exports=router