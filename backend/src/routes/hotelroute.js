const express=require('express')
const router=express.Router()

const newPlaceControllers=require('../controller/hotelController')
const upload=require('../common-middleware/upload')


router.post('/storehotel', upload.single('avatar'), newPlaceControllers.store)
router.get('/showhotel',newPlaceControllers.showp)
router.post('/destroyp',newPlaceControllers.destroyp)
router.post('/updateh',newPlaceControllers.updateh)
module.exports=router