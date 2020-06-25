const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

const userFields = {
    usernameField:"email",
    passwordField:"password"
}

passport.use(new LocalStrategy(userFields, function(email, password, done){

}))