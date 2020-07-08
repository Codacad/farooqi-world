const express = require('express');
const Router = express.Router();
const Article = require('../models/article');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');

Router.get('/', (req, res) => {   
    req.flash('allFieldRequired', "You must fill all fields.")          
    req.flash('passwordLength', "Password must contain at least 6 characters.")          
    req.flash('password', "Please enter the password.")          
    console.log(req.flash())    
    Article.find({}, (err, articles) => {    
        if(err){
            res.status(404).send(err)
        }else{
            res.render('index', {
                title:"Farooki World",                    
                articles,
                AuthUser:req.user
            });  
        }        
    })                            
})

Router.get('/article/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        if(err){
            res.status(404).send({msg:"Some Errors Occured"})
        }
        res.render('article', {
            title:"Article",
            article,
            AuthUser:req.user
        });
    })
})


Router.get('/contact',(req, res) => {
    res.render('contact', {
        title:"Contact",
        AuthUser:req.user
    });
})

Router.get('/about',(req, res) => {
    res.render('about', {
        title:"About Us",
        AuthUser:req.user
    });
})

Router.get('/create-new-article', (req, res) => {
    res.render('create-article', {
        title:"Create Article",
        AuthUser:req.user
    })    
})

// Post Route for creating new article
Router.post('/create-new-article', (req, res) => {
    const article =  {            
        title:req.body.title,
        category:req.body.category,
        body:req.body.body,
        author:req.user
    }   
    const newArticle = new Article(article);                                        
    newArticle.save((err, article) => {
        if(err){
            res.status(404).send(err)
        }else{
            res.redirect('/')
        }        
    })        
    
})

Router.get('/login', (req, res) => {
    if(!req.user){
        res.render('login', {
            title:"Login",
            AuthUser:req.user
        })
    }else{
        res.redirect('/')
    }
})
Router.post('/login', passport.authenticate('local', {
    failureFlash:true,
    failureRedirect:"/",
    successRedirect:"/"
}))

Router.get('/register', (req, res) => {
    if(!req.user){
        res.render('register', {
            title:"Register",
            AuthUser:req.user
        })    
    }else{
        res.redirect('/');
    }
})

Router.post('/', (req, res) => {
    const {name, email, password} = req.body;
    const newUser = new User(req.body);
    const message = {}
    if(!name){
        message.name = "Name Required..."
    }
    if(!email){
        message.email = "Email Required..."
    }
    if(!password){
        message.password = "Password Required..."
    }else if(password.length < 6){
        message.passwordLength = "Minimum 6 characters..."
    }        
     if(Object.keys(message).length === 0){
         message.success = "Registered Successfully..."
        const salt = 10;
        bcrypt.hash(newUser.password, salt, function(err, hash) {    
            newUser.password = hash;
            if(err){
                return err;
            }else{
                newUser.save(function(error, user){ 
                    if(error){
                        return error
                    }               
                    res.redirect('/')                                    
                })
            }
        });        
     }else{
         
     }              
})

Router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/')
})
// Users Api
Router.get('/api/users', (req, res) => {
    User.find({}, (err, users) => {
        if(err){
            return err
        }

        res.send(users)
    })
})
Router.get('/api/articles', (req, res) => {
    Article.find({}, (err, article) => {
        if(err){
            res.status(404).send({msg:"Some Errors Occured"})
        }
        res.send(article)
    })
})
module.exports =  Router;