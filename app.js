const express = require('express');
const mongoose = require('mongoose')
const session = require('express-session');
const connectMongo = require('connect-mongo')(session);
const expressLayout = require('express-ejs-layouts');
const cors = require('cors');
const routes = require('./routes/index');
require('dotenv').config()
const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.set('view engine', "ejs");
app.use(expressLayout);
app.use(express.static('views'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/farooqi-world', {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log(`Connection is established at ${connection.host}:${connection.port}`)
})

const sessionStore = new connectMongo({
    mongooseConnection:connection,
    collection:"sessions"
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

app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})