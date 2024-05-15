const express = require('express')
const passport = require ('passport')
const Joi = require('joi')
const mongoose = require("mongoose")
const User = require("../models/User")
const sendVerificationEmail = require("../libs/EmailTransport")
const bcrypt = require("bcrypt")
const auth = require("../libs/auth")
const crypto = require("crypto")
const initializePassport = require('../libs/passport')

const router = express.Router()

const registrationSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(5).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password'),
    email: Joi.string().required().email(),
    profilePicture: Joi.string(),
    bio: Joi.string().min(10).max(50),
    gender: Joi.string(),
    website: Joi.string()
})

initializePassport(
    passport,
    email => User.find(user => user.username === username),
    id => User.find(user => user.id === id)
)


// register 
router.post("/register", auth.isNotAuthenticated, async(req, res) => {
    try {

        const {error, value} = registrationSchema.validate(req.body)

        if(error){
            res.status(404).json({ error: error.details[0].message })
        }

        let username = value.username
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "Username already registered" });
        }

        const hashedPassword = await bcrypt.hash(value.password, 10)

        if(!hashedPassword){
            res.status(500).json({error: "Internal server error"})
        }

        const newUser = new User({
            username: value.username,
            email: value.email,
            password: value.password,
            verified: false 
        })

        //generate and store the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        const savedUser = await newUser.save()

        const subject = `Click the following link to verify your email: ${savedUser.verificationToken}`

        //send the verification email to the user
        sendVerificationEmail(savedUser.email, "Email Verification", subject );
        
        res.status(201).json({ message: 'User registered successfully' });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server unable to register this user"})
    }

})

// login
router.post("/login", auth.isNotAuthenticated, passport.authenticate('local', { session: false }), async(req, res) => {
    try {

        // Check if user is verified
        if (!req.user.verified) {
            return res.status(403).json({ error: 'Email not verified. Please verify your email to login.' });
        }

        // If user is verified, generate JWT token
        const token = auth.generateToken(req.user._id);
        return res.json({ token });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server unable to register this user"})
    }
})

//log out
router.post("/logout", (req, res) => {
    req.logout();
    res.redirect('/login');
})


module.exports = router