const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

router.post('/register', (req, res, next) => {
    //console.log(req.body.name);
    let newUser = new  User({
        name: req.body.name,
        email: req.body.email,
        // username: req.body.username,
        type: req.body.type,
        password: req.body.password
    });
    const email = req.body.email;

    User.getUserByUsername(email, (err, user) => {
        if (err) throw err;
        if (!user){
            User.addUser(newUser, (err, user) => {
                if (err){
                    res.json({success:false, msg:'Failed to register user'})
                }else{
                    res.json({success:true, msg:'User registered'})
                }
            });
        }else{
           res.json({success:false, msg:'Use Another Email'})
       }
    });

    // User.addUser(newUser, (err, user) => {
    //     if (err){
    //         res.json({success:false, msg:'Failed to register user'})
    //     }else{
    //         res.json({success:true, msg:'User registered'})
    //     }
    // });
});

router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByUsername(email, (err, user) => {
        if (err) throw err;
        if (!user){
            return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch){
                const token = jwt.sign({data: user}, config.secret ,{
                    expiresIn: 1800
                });
                //console.log(dashboard);
                res.json({
                    success: true,
                    token: `Bearer ${token}`,
                    user:{
                        id: user._id,
                        name: user.name,
                        type: user.type,
                        email: user.email
                    }
                });
            }else{
                return res.json({
                    success: false,
                    msg: 'Wrong password'
                });
            }
        });
        
    });
});

router.get('/profile', passport.authenticate('jwt', {session:false}),(req, res, next) => {
    res.json({user: req.user});
});

// router.get('/validate', (req, res, next) => {
//     res.send('VALIDATE');
// });

module.exports = router;