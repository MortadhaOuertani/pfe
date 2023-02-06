const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestModule = new Schema({
    status:Boolean,
    dateone:Date,
    datetwo:Date,
  }, {timestamps: true})

module.exports = mongoose.model("admin", TestModule);