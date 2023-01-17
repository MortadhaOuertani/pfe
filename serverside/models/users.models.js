const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
    Email: {
        type: "string",
        trim: true,
        unique: true,
      },
    Nom : "string",
    Password: "string",
    Logo:"string",
    Role:"string",
}, {timestamps: true})


