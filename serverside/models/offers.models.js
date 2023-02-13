const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OffersModule = new Schema({
  company:String, //clé étrangère de la table mère user 
<<<<<<< HEAD
    dateExpiration:Date,
=======
    dateE:Date,
    dateD:Date,
>>>>>>> a0b0a8f412390e28fa27261ac6e671d8055db51b
    nbrRecrute:Number,
    contract:String,
    salary:String,
    study:String,
    language:String,
    experience:String,
    title:String,
    descripion:String,
    search:[[]],

  }, {timestamps: true})

module.exports = mongoose.model("offers", OffersModule);
