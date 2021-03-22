const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Result = new Schema({
  fullname: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  inscription: {
    type: String,
    required: true
  },
  score: {
    type: String,
    required: true
  },
},{
    collection: 'result'
});
module.exports = mongoose.model('Result', Result);