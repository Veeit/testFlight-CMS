var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var textImageComponentSchema = new Schema({
  title: String,
  description: String,
  img: [{ name: String, src: String }]
});

module.exports = textImageComponentSchema;
