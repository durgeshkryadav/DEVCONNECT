const express = require("express");
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const { check, validationResult } = require("express-validator");

const User = require('../../models/User');



// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  '/',
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

    const { name, email, password } = req.body;
    
    try{
          let user = await User.findOne({ email });
          if(user)
          {
            return res.status(400).json({errors: [{ msg: 'User Already exists' }] });
          }
          const avatar = gravatar.url(email,{
            s: '200',
            r: 'pg',
            d: 'mm'
          })

          user = new User({
            name,
            email,
            avatar,
            password
          });

          const salt = await bcrypt.genSalt(10);

          user.password = await bcrypt.hash(password,salt);
          await user.save();

          // res.send('User registred');
          const payload = {
            user:{
              id:user.id
            }
          }

          jwt.sign( 
            payload, 
            config.get('jwtSecret'),
            { expiresIn: 7200000},
            (err,token)=>{
              if(err) throw err;
              res.json({token});
            });




    }
    catch(err){
            console.error(err.message);
            res.status(500).send('Server Error Dubara Try Kariye Please');
    }    
  }
);

module.exports = router;


    // See if user exists
    
    // Get users gravatar

    // Encrypt password

    // Return jsonwebtoken