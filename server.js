//imports 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const dbConfig = require('./database/db');

//Connecting to the database
mongoose.connect(dbConfig.DB, { useNewUrlParser: true}).then(() => {
    console.log('Database is connected')
}).catch((err) => {
    console.log('Database ERROR: ' + err);    
})

const app = express();

const port = process.env.PORT || 5000;

//BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/', function(req, res){
    res.send('yo');
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});