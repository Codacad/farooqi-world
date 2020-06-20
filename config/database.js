const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/farooqi-world', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connection is established at ${db.host}:${db.port}`)
})

module.exports = db;