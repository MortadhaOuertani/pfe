const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanyModel = new Schema({
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
    address:"string",
    phone:"string"
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("company", CompanyModel);
