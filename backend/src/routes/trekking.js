const express=require('express')
const router=express.Router()

const trekking=require('../controller/trekking')
const upload=require('../common-middleware/upload')


router.post('/storet', upload.single('avatar'), trekking.storet)
router.get('/showt',trekking.showt)
router.post('/destroyt',trekking.destroyt)
router.post('/updatet',trekking.updatet)
module.exports=router