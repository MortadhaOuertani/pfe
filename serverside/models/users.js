const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
    Email: {
        type: "string",
        trim: true,
        unique: true,
      },
    Nom : String,
    Password: String,
    Logo:String,
    Role:String,
}, {timestamps: true})



module.exports = mongoose.model('users', UserModel);