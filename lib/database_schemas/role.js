const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
  name: String,
});

module.exports = RoleSchema;
