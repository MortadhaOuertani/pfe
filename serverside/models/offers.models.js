const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminModel = new Schema({
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

module.exports = mongoose.model("admin", AdminModel);
