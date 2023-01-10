const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const peopleHandler = require('./routeHandler/peopleHandler')
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json());

//  database connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('successfull connection'))
    .catch((err) => console.log(err))


// application routes
app.use('/people', peopleHandler)


app.listen(port, () => {
    console.log('listening')
})