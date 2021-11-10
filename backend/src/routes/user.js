const express=require('express')
const router=express.Router()

const userControllers=require('../controller/user')


router.get('/show', userControllers.show)
router.post('/index',userControllers.index)
router.post('/store',userControllers.store)
router.post('/update',userControllers.update)
router.post('/delete', userControllers.destroy)
router.post('/login', userControllers.login)

module.exports=router