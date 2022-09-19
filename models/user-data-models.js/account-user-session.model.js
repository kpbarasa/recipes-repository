const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountUserSessionSchema = new Schema({
  sessionID: {
    type: String,
    required: true, 
    unique:true,
    trim: true
  },
  session_user: {
    type: String,
    unique:true,
    required: true
  },
  session_start: {
    type: Date,
    required: true 
  },
  session_end: {
    type: Date,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  secret: {
    type: String,
    required: true
  },
  session_status: {
    type: String, 
    required: true,
    unique:true
  }
}, {
  timestamps: true,
});

const accountUserSessions = mongoose.model('account-user-sessions', accountUserSessionSchema);

module.exports = accountUserSessions;