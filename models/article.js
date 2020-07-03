const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({    
    title:{type:String, required:true},
    category:{type:String},
    body:{type:String, required:true},  
    author:{type:Object, default:{name:"Anonymous"}}   
}, {timestamps:true})

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;