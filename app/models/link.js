var mongoose = require('mongoose');
var crypto = require('crypto');

var linkSchema = mongoose.Schema({
  visits: Number,
  link: String,
  title: String,
  code: String,
  base_url: String,
  url: String
});

var Link = mongoose.model('Link', linkSchema);

linkSchema.pre('save', function(next) {

  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
});

module.exports = Link;
