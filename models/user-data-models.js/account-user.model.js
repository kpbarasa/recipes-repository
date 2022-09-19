const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userAccountSchema = new Schema({
  user_name: {
    type: String,
    required: true, 
    unique: true,
    minlength: 7
  },
  user_fname: {
    type: String,
    required: true,
    minlength: 3
  },
  user_mname: {
    type: String,
    required: true,  
    minlength: 3
  },
  user_lname: {
    type: String,
    required: true, 
    minlength: 3
  },
  gender: {
    type: String,  
    required: true,  
    minlength: 3
  },
  phone_no: {
    type: Number,  
    required: true,  
    minlength: 3
  }, 
  email_add: {
    type: String,  
    required: true,  
    unique: true,
    minlength: 3
  },
  user_dob: {
    type: Date,  
    required: true,  
    minlength: 3
  },
  user_password: {
    type: String,  
    required: true,  
    unique: true,
    minlength: 3
  },
  user_level: {
    type: Number,  
    required: true,  
    minlength: 3
  }
}, {
  timestamps: true,
});

const userAccount = mongoose.model('accounts-users', userAccountSchema);

module.exports = userAccount;