const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Questions = new Schema({
  class: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  choice1: {
    type: String,
    required: true
  },
  choice2: {
    type: String,
    required: true
  },
  choice3: {
    type: String,
    required: true
  },
  choice4: {
    type: String,
    required: true
  },  response: {
    type: String,
    required: true
  },
},{
    collection: 'questions'
});
module.exports = mongoose.model('Questions', Questions);