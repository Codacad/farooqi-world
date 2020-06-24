const express = require('express');
const Router = express.Router();
const Articles = require('../models/article');
const Article = require('../models/article');

Router.get('/', (req, res) => {
    Article.find({}, (err, article) => {
        if(err){
            res.status(404).send({msg:"Some Errors Occured"})
        }
        res.render('index', {
            title:"Farooki World",
            article
        });
    })
    
})

Router.get('/article/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        if(err){
            res.status(404).send({msg:"Some Errors Occured"})
        }
        res.render('article', {
            title:"Article",
            article
        });
    })
})


Router.get('/contact',(req, res) => {
    res.render('contact', {title:"Contact"});
})

Router.get('/about',(req, res) => {
    res.render('about', {title:"About Us"});
})

Router.get('/create-new-article', (req, res) => {
    res.render('create-article', {title:"Create Article"})    
})

// Post Route for creating new article
Router.post('/create-new-article', (req, res) => {
    const newArticle = new Article(req.body);
    newArticle.save((err, article) => {
        if(err){
            res.status(404).send('<h1>Some Errors Occured</h1>')
        }
        res.redirect('/')
    })        
})
Router.get('/login', (req, res) => {
    res.render('login', {
        title:"Login"
    })
})
Router.get('/register', (req, res) => {
    res.render('register', {
        title:"Register"
    })
})
Router.get('/api/article', (req, res) => {
    Article.find({}, (err, article) => {
        if(err){
            res.status(404).send({msg:"Some Errors Occured"})
        }
        res.send(article)
    })
})
module.exports =  Router;