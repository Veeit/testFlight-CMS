var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PageSchema = new Schema({
  title: String,
  description: String,
  components: Object
});

module.exports = PageSchema;
