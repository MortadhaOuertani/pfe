const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const passport = require('passport');
const upload = require("./middleware/multer");

const corsOptions = {
  origin: ['http://localhost:3000'],
};

const app = express();

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

/* passport */
app.use(passport.initialize()); // set up session state
require('./security/passport')(passport);
/* connect to db */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err));

// middleware to handle file uploads

app.use('/api', indexRouter); // pour utiliser les routes qui existent dans indexRouter

module.exports = app;