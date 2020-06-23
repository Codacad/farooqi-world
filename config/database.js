const mongoose = require('mongoose');
const session = require('express-session');
const connectMongo = require('connect-mongo')(session);
const app = require('express')();
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/farooqi-world', {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('connected', () => {
    console.log(`Connection is established at ${db.host}:${db.port}`)
})

const sessionStore = new connectMongo({
    mongooseConnection:db,
    collection:"session"
})

app.use(session({
    secret:"nayriz",
    resave:false,
    saveUninitialized:true,
    store:sessionStore,
    cookie:{
        maxAge: 1000*60*60*24
    }
}))

module.exports =  db;