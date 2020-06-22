const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    author:{type:String},
    title:{type:String, required:true},
    category:{type:String},
    body:{type:String, required:true}
}, {timestamps:true})

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;