const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
let User = new Schema({
  fullname: {
    type: String,
    required: true
  },
  inscription: {
    type: String,
    unique: true,
    required: true
  },
 class: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
},{
    collection: 'user'
});
module.exports = mongoose.model('User', User);