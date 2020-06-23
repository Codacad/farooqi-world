const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/farooqi-world', {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('connected', () => {
    console.log(`Connection is established at ${db.host}:${db.port}`)
})

