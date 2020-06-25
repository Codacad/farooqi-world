const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const userFields = {
    usernameField:"email",
    passwordField:"password"
}

passport.use(new LocalStrategy(userFields, function(email, password, done){
    User.findOne({email:email})
    .then((user) => {
        if(!user){
            return done(null, false, {emailNotRegistered:"Email is not registered.."});
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if(!result){
                return done(null, false, {incorrectPassowrd:"Incorrect Password..."});
            }else{
                return done(null, user);
            }                
          });        
    }).catch(err => console.log(err));
}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then(user => {
            done(null, user)
        }).catch(err =>  done(err))        
})