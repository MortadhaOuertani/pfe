const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OffersModule = new Schema({
  company:String, //clé étrangère de la table mère user 
    dateE:Date,
    dateD:Date,
    nbrRecrute:Number,
    contract:String,
    salary:String,
    study:String,
    language:String,
    experience:String,
    title:String,
    descripion:String,
    search:[{
      type:String
    }],
    title:String,

  }, {timestamps: true})

module.exports = mongoose.model("offers", OffersModule);
