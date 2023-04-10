const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
  },
  rol:{
    type: String,
    required: true
  },
  Ci:{
    type: String,
    required: true,
    unique: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  celular:{
    type: Number,
    required: true
  },
  password: { 
    type: String, 
    required: true },
});

module.exports = mongoose.model('User', userSchema);
