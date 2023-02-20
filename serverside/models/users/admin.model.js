const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminModel = new Schema({
    email: {
        type: "string",
        trim: true,
        unique: true,
      }, 
    password: "string",
    role :String,

  }, {timestamps: true})

module.exports = mongoose.model("admin", AdminModel);
