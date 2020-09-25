const mongoose = require('mongoose')

const UserSchema = require("./user")
const SubteamSchema = require("./subteam")

const RoleSchema = mongoose.Schema({
    name: String  
})

module.exports = RoleSchema