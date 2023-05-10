const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
    email: {
        type: "string",
        trim: true,
        unique: true,
      }, 
    name : "string",
    lastname:"string",
    password: "string",
    confirm:"string",
    role:"string",
    diplome:"string",
    anneeObtentionDiplome:Date, 
    age:"string",
    address:"string",
    phone:"string",
    niveauEtude:"string",
    skills:[],
    letter:String,
    employement:String,
    cv: {
      data:String,
      contentType: String,
    },
    profile:"string"
  }, {timestamps: true})

module.exports = mongoose.model("candidate", UserModel);
