var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
var bodyParser = require('body-parser');
var cors= require("cors");
const mongoose = require('mongoose')
var indexRouter = require('./routes/index');
const passport = require('passport')
var corsOptions = {
    origin: ['http://localhost:3000'],
  }
var app = express();
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: false})); // parse urlencoded request bodies into req.body
app.use(express.static(path.join(__dirname, 'public')));

/* passport */
app.use(passport.initialize()) //set up session state
require('./security/passport')(passport)
/* connect to db */
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected to db"))
.catch(err=>console.log(err))

app.use('/api', indexRouter); //pour utiliser les routes qui existent dans indexRouter 

app.get('/aa', passport.authenticate('jwt',{session:false}),);


module.exports = app;
