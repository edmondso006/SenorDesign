//imports 
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const dbConfig = require('./database/db');

const users = require('./routes/user');

//Connecting to the database
mongoose.connect(dbConfig.DB, { useNewUrlParser: true}).then(() => {
    console.log('Database is connected')
}).catch((err) => {
    console.log('Database ERROR: ' + err);    
})

const app = express();

app.use(passport.initialize());
require('./database/auth/passport')(passport);

//BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api/users', users);


app.get('/', function(req, res){
    res.send('yo');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});