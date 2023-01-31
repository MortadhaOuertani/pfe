const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
    email: {
        type: "string",
        trim: true,
        unique: true,
      }, 
    name : "string",
    password: "string",
    confirm:"string",
    logo:"string",
    role:"string",
}, {timestamps: true})

module.exports = mongoose.model("users", UserModel);
