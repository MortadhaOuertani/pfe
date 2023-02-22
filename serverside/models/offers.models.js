const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OffersModule = new Schema({
  company:String, //clé étrangère de la table mère user 
    dateExpiration:Date,
    nbrRecrute:Number,
    contract:String,
    salary:String,
    study:String,
    local:String,
    language:String,
    experience:String,
    title:String,
    descripion:String,
    search:[],
    candidates:[],
}, { timestamps: true })

module.exports = mongoose.model("offers", OffersModule);
