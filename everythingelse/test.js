var mongoose = require('mongoose');
var Task = require('./schema');
var express = require('express');
var app = express();

// create a new user
var newTask = Task({
  text: 'get express running!',
  id: 0,
});

// save the user
newTask.save(function(err) {
  if (err) throw err;
});


newTask.get('/', function (req, res) {
  res.send(Task)
})

app.listen(3001)
