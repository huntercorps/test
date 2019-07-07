const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Set Port and enviroment
const port = process.env.PORT || 5000;
require('dotenv/config');

//Import Routes
const reviewRouter = require('./routes/review');  //Import routes for "book"

//Middleware
app.use(express.json()); //parse requests w/ json

app.use('/reviews', reviewRouter); // Add book routes to middleware chain.

//Connect to DB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log("Database connection established")
        // const connection = mongoose.connection;
        // connection.once("open", () => { console.log("Database connection established") });
    })
    .catch(err => console.log(err));


//Start server listening
app.listen(port, () => console.log(`Server started on port ${ port }`));