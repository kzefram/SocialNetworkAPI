const express = require('express');
const router = express.Router();
// const mongoose = process.env.MONGODB_URI;
const db = require('./config/connection');
const routes = require('./routes/index');
const PORT = process.env.PORT || 3000;

app = express();

app.use(express.json());

app.use(routes);


// We want to make sure we have a PROPER DB CONNECTION before we start the server
db.once('open', () => {
    console.log("Database connected...");
    app.listen(PORT, () => {
        console.log(`Server is running on http://127.0.0.1.3000:${PORT}`);
    });
})

