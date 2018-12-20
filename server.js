//imports 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


//const routes = require('./routes');

const app = express();

const port = process.env.PORT || 5000;

//BodyParser Middleware
app.use(bodyParser.json());
app.use(cors());

//routes
//app.use('/', routes);


const db = ''       


//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || db).then(() => {
    console.log("Successfully connected to mongodb...");
}).catch(err => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});