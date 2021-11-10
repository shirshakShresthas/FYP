'use strict';
const User=require('../models/user');

//show the list of user
const show=(req, res, next) =>{
    User.find()
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


//show specific user
const index=(req, res, next) =>{
    let user_id=req.body._id
    User.findById(user_id)
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


// add  new user's
const store=(req, res, next) =>{
    let user=new User({
        firstName:req.body.first_name,
        lastName:req.body.last_name,
        email:req.body.email,
        username:req.body.first_name,
        
        hash_password:req.body.password,
        contactNumber:req.body.contact_number
    })
    user.save()
    .then(response =>{
        res.json({
            message:'User added successfully' 
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}

//update user's
const update=(req, res, next) =>{
    let user_id=req.body._id
    let updatedData={
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password 
    }
    User.findByIdAndUpdate(user_id,{$set:updatedData})
    .then(response =>{
        res.json({
            message:'User updated successfully' 
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}

// delete  user
const destroy=(req, res, next) =>{
    let user_id=req.body._id
    User.findByIdAndRemove(user_id)
    .then(response =>{
        res.json({
            message:'User deleted successfully' 
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })

}

const login=(req,res, next)=>{
    var first_name=req.body.user_name
    var password=req.body.password
    
    User.findOne({$or:[{email:first_name},{phone:first_name}]})
    .then(user=>{
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(password==user.password){
                    result=true
                }
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token=jwt.sign({first_name:user.first_name},'AZDFGH($67',{expiresIn:'1h'})
                    let _id=user._id
                    let role=user.role
                    let username=user.first_name
                    res.json({
                        message:'login successfull',
                        token,
                        _id,
                        role,
                        username
                    })
                }
                else{
                    res.json({
                        message:'password doesnot match'
                    })
                }
            })

        }
        else{
            res.json({
                message:'no user found!'
            })
        }
    })
}
module.exports={
    index, show, store, update, destroy, login
}


