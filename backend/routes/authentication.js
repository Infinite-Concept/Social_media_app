const express = require('express')
const passport = require ('passport')
const mongoose = require("mongoose")
const User = require("../models/User")
const EmailTransport = require("../libs/EmailTransport")

const router = express.Router()

// register 
router.post("/register", async() => {
    try {

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server unable to register this user"})
    }

})

// login
router.post("/login", (req, res) => {

})

//log out
router.post("/logout", (req, res) => {
    
})