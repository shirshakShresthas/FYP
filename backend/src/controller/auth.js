const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {

    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                message: 'User already registered'
            });

            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;
            const_user = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString()
            });

            const_user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: 'Something went wrong'
                    });

                }

                if (data) {
                    return res.status(201).json({
                        message: 'User created Successfully..!'
                    })
                }
            });
        });

}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) return res.status(400).json({ error });
            if (user) {
                if (user.authenticate(req.body.password)) {
                    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '0.25h' });
                    const { _id, firstName, lastName, email, role, fullName } = user;
                    res.status(200).json({
                        token,
                        _id, 
                        firstName,
                        
                        user: {
                            _id, firstName, lastName, email, role, fullName
                        }
                    });

                } else {
                    return res.status(400).json({
                        message: 'Invalid Password'
                    })
                }

            } else {
                return res.status(400).json({ message: 'Something went wrong' });

            }

            
        });
}

//show the list of user
exports.showUser = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}
//update user's
exports.updateUser=(req, res, next) =>{
    let user_id=req.body._id
    let updatedData={
        firstName:req.body.first_name,
        lastName:req.body.last_name,
        email:req.body.email,
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
exports.destroyUser=(req, res, next) =>{
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

