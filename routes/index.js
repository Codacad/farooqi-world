const express = require('express');
const Router = express.Router();
const Article = require('../models/article');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const e = require('express');

Router.get('/', (req, res) => {      
    if(req.user){
        req.user.admin = true;
    }          

    console.log(req.user)
    Article.find({}, (err, articles) => {    
        if(err){
            res.status(404).send(err)
        }else{
            res.render('index', {
                title:"Farooki World",                    
                articles,
                AuthUser:req.user,
                fail:req.flash('failed'),
                success:req.flash('created')
            });  
        }        
    })                            
})

Router.get("/user/:id"||"/user/:name", (req, res) => {
    User.findOne({_id:req.params.id}, (err, user) => {        
        Article.find({}, (err, articles) => {            
            if(!user){           
                const nonUserArticles = articles.filter(anonymousArticles => {
                    if(anonymousArticles.author.name == "Anonymous"){
                        return anonymousArticles;
                    }
                })
                if(err){
                    return res.status(400).send(err)
                }else{
                    return res.render("user", {
                        title:"Anonymous",
                        nonUserArticles,
                        AuthUser:req.user
                    });
                }                            
            }else{
                const userArticles = articles.filter(userArticle => {
                    if(req.params.id == userArticle.author._id){
                        return userArticle;
                    }                
                })            
                res.render("user", {
                    title:"User",
                    AuthUser:req.user,
                    userArticles
                })
            }            
        })
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


// Router.get('/contact',(req, res) => {
//     res.render('contact', {
//         title:"Contact",
//         AuthUser:req.user
//     });
// })

// Router.get('/about',(req, res) => {
//     res.render('about', {
//         title:"About Us",
//         AuthUser:req.user
//     });
// })

Router.get('/create-new-article', (req, res) => {
    res.render('create-article', {
        title:"Create Article",
        AuthUser:req.user
    })    
})

// Post Route for creating new article
Router.post('/', (req, res) => {
    const article =  {            
        title:req.body.title,
        category:req.body.category,
        body:req.body.body,
        author:req.user
    }   
    const words = req.body.body.split(' ');    
    const errors = {};
    if(!req.body.title){
        errors.titleRequired = 'Required'
    }
    if(!req.body.body){
        errors.bodyRequired = 'Required'
    }else if(words.length < 50){
        errors.bodyLength = "Please write at least 50 words"
    }        

    if(Object.keys(errors).length === 0){        
        const newArticle = new Article(article);                                        
        newArticle.save((err, article) => {
            if(err){
                return res.status(404).send(err)
            }else{
                req.flash('created', "Created Successfully...")
                res.redirect('/')
            }        
        })        
    }else{
        req.flash('failed', errors);
        res.redirect('/#create-article');
    } 
    
})

Router.get('/login', (req, res) => {
    if(req.user){
        res.redirect('/')
    }else{
        res.render('login', {
            title:"Login",
            AuthUser:req.user
        })    
    }    
})
Router.post('/login', passport.authenticate('local', {
    failureRedirect:"/login",
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

Router.post('/register', (req, res) => {
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
         res.render('register', {
             message,
             title:"Register",
             AuthUser:req.user             
         });                  
     }              
})

Router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
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