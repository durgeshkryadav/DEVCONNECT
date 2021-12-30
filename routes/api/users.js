const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const User = require('../../models/User');



// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  "/",
  [check("name", "Name is required please").not().isEmpty(),
  check('email', 'please include a valid email').isEmail(),
  check('password', 'Please enter a password with more than 12 charactors').isLength({
      min: 12})

],
  
  
  async(req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const {name, email, password } = req.body;
    
    try{
    let user = await User.findOne({ email });

    if(user){
        res.status(400).json({errors: [{ msg: 'User Already exists' }]});
    }
    // See if user exists
    
    // Get users gravatar

    // Encrypt password

    // Return jsonwebtoken

    res.send("User route");


    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error Dubara Try Kariye Please');
    } 



    
  }
);

module.exports = router;
