const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RestoransShema = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  } 
});

module.exports = Restorans = mongoose.model('restorans', RestoransShema);
