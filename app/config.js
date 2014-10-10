var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongoose opened!!! yayayay');

});

module.exports = db;


