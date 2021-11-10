const express = require('express');
const { signup, signin, showUser,updateUser, destroyUser } = require('../controller/auth');
const { validateSigninRequest, isRequestValidated, validateSignupRequest,} = require('../validators/auth');
const router = express.Router();



router.post('/signup',validateSignupRequest, isRequestValidated, signup);

router.post('/signin', validateSigninRequest, isRequestValidated ,signin);

router.post('/updateUser',updateUser);
router.post('/destroyUser',destroyUser);
router.get('/showUser', showUser);

//router.post('/profile', requireSignin, (req, res) => {
  //  res.status(200).json({ user: 'profile'})
//});

module.exports = router;