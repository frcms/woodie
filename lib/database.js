const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, user: process.env.MONGODB_USERNAME, pass: process.env.MONGODB_PASSWORD});

mongoose.connection.on("open", function(ref){
    console.log("Connected to MongoDB")
})

const SubteamSchema = require("./database_schemas/subteam")
const UserSchema = require("./database_schemas/user")
const RoleSchema = require("./database_schemas/role")

const UserModel = mongoose.model('User', UserSchema)
const SubteamModel = mongoose.model('Subteam', SubteamSchema)
const RoleModel = mongoose.model('Role', RoleSchema)

const UserCollection = UserModel.createCollection()
const SubteamCollection = SubteamModel.createCollection()
const RoleCollection = RoleModel.createCollection()


