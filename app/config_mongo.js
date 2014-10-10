var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongoose opened!!! yayayay');

  var urlsSchema = mongoose.Schema({
    url: String,
    base_url : String,
    code: String,
    title: String,
    visits: Number,
    date: { type: Date, default: Date.now }
  });

  var usersSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    date: { type: Date, default: Date.now }
  })

});

module.exports = db;


