var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var textComponentSchema = new Schema({
  title: String,
  description: String
});

module.exports = textComponentSchema;
