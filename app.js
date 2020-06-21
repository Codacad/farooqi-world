const express = require('express');
const mongoose = require('mongoose')
const expressLayout = require('express-ejs-layouts');
const cors = require('cors');
const routes = require('./routes/index')
const config = require('dotenv').config()
// console.log(config)
console.log(process.env.MONGODB_URI)
const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.set('view engine', "ejs");
app.use(expressLayout);
app.use(express.static('views'));

// DB Connection
require('./config/database')

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
