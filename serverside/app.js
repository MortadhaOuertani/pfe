var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var cors= require("cors");
const mongoose = require("mongoose")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB CONNECTED'))
.catch(err=>console.log(err.message))

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api', routerUsers)

module.exports = app;
