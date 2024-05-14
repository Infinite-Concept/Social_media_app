const mongoose = require("mongoose")
const passport = require("passport")

const UserScheme = new mongoose.Schema({
    username: {
        require: true,
        type: String,
        min: 4,
        unique: true,
        lowercase: true, 
        trim: true,
    },
    email: {
        require: true,
        type: String,
        unique: true
    },
    password: {
        require: true,
        type: String,
        min: 5
    },
    profilePicture: {
        type: String
    },
    joindDate: { 
        type: Date, 
        default: Date.now
    },
    sentFollowRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    receivedFollowRequests: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    verified: {
        type: Boolean,
        default: false,
    },
    verificationToken: String,
})

module.exports = mongoose.model("user", UserScheme)