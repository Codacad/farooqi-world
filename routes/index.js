const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('index', {title:"Farookis World"});
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
Router.get('/article', (req, res) => {
    res.render('article', {title:"Article"});
})

module.exports =  Router;