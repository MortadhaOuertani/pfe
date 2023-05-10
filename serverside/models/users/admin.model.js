const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminModel = new Schema({
    email: {
        type: "string",
        trim: true,
        unique: true,
      }, 
    password: "string",
    acceptList : [] ,
    role :String,

  }, {timestamps: true})

module.exports = mongoose.model("Admin", AdminModel);
