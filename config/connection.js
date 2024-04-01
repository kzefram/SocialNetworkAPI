require('dotenv').config();

const mongoose = require('mongoose');
// here we are attempting to make a DB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/MediaDB'); 


module.exports = mongoose.connection;