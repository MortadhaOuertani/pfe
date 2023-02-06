const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OffersModule = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  }, //clé étrangère de la table mère user 
    dateE:Date,
    dateD:Date,
    nbrRecrute:Number,
    contract:"string",
    salary:"string",
    study:"string",
    language:"string",
    experience:"string",
    title:"string",
    descripion:"string",
    search:[],
    title:"string",

  }, {timestamps: true})

module.exports = mongoose.model("offers", OffersModule);
