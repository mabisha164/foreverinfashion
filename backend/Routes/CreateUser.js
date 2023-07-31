const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {body, validationResult} = require('express-validator');

router.post('/createuser',[
  body('email').isEmail(),
  
  body('password').isLength({min: 5})],
   async(req,res) =>{
  
    const errors = validationResult(req);
    if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array()});
  }

   try {
     await User.create({
        firstName: req.body.firstName ,
        lastName: req.body.lastName ,
        email: req.body.email,
        password: req.body.password,
   })
    res.json({sucess:true});
   } catch (error) {
     console.log(error)
     res.json({success:false});
   }
})

module.exports = router;