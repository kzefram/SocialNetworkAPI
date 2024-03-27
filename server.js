const express = require('express');
//const sequelize = require('../config/connection');
const mongoose = require('mongoose');
//const routes = require('./routes');
//const { getAllUsers } = require('../controllers/users-controller');
//const PORT = process.env.PORT || 3000;
const app = express();

// Routes
//app.use(routes);



// Connect to the database before starting the Express.js server
mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });
});
