var mongoose = require('mongoose');
// Define collection and schema for todo item
var TDschema = new mongoose.Schema({
  text: String,
  id:  Number
})
// var connection = mongoose.createConnection('mongodb://thetempleofzoom:techladies123@ds217002.mlab.com:17002/tododata');
var Task = mongoose.model('Task', TDschema)
module.exports = Task;
