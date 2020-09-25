const mongoose = require('mongoose');

const UserSchema = require('./user');

const SubteamSchema = mongoose.Schema({
  name: String,
  teamLead: { type: UserSchema, ref: 'User' },
  teamMembers: [{ type: UserSchema, ref: 'User' }],
  tasks: Array,
  teamInfo: {},
});

module.exports = SubteamSchema;
