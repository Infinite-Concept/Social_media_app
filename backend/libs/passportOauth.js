
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

function initializePassport(passport) {
    passport.use('google', new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            // Check if user already exists in your database
            let user = await User.findOne({ googleId: profile.id });
            if (!user) {
                // If user doesn't exist, create a new user
                user = new User({
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    username: profile.displayName,
                    // Other necessary fields
                });
                await user.save();
            }
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    }));

    passport.use('facebook', new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: '/auth/facebook/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            // Similar logic as above for Facebook authentication
        } catch (error) {
            done(error, null);
        }
    }));

    // Serialize and deserialize user functions
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });
}

module.exports = initializePassport;
