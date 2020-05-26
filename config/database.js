const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connection is established at ${db.host}:${db.port}`)
})

module.exports = db;