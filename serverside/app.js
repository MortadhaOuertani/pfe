const express = require('express'); //importe le module Express pour construire une application web en utilisant Node.js
const path = require('path'); //importe le module path de Node.js, qui fournit des utilitaires pour travailler avec des chemins de fichiers et de répertoires
const logger = require('morgan'); //morgan: un middleware permet de journaliser les requêtes entrantes dans la console.
require('dotenv').config(); //Charge les variables d'environnement du fichier
const cors = require('cors');   //cors : est un mécanisme de sécurité
const mongoose = require('mongoose'); //Importe le module Mongoose: permet d'utiliser MongoDB avec Node.js en utilisant une syntaxe de modèle basée sur des schémas.

const indexRouter = require('./routes/index'); //
const passport = require('passport'); //importer le module passport(middleware d'authentification)
const { checkForExpiredOffers } = require('./controllers/offer.controllers'); 

const corsOptions = {
  origin: ['http://localhost:3000'],
};

const app = express();

/*check for expired offers to remove hourly*/
checkForExpiredOffers()

/*middlewares*/
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.urlencoded({ limit: '50mb',extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' }));

/* passport */
app.use(passport.initialize()); // set up session state
require('./security/passport')(passport);


/* connect to db */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err));


app.use('/api', indexRouter); // pour utiliser les routes qui existent dans indexRouter

module.exports = app;