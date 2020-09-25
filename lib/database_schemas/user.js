const mongoose = require('mongoose')

const SubteamSchema = require("./subteam")
const PermissionSchema = require("./role")

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    userInfo: {
        name: {
            first: String,
            last: String
        },
        subteam: SubteamSchema,
        age: Number,
        permissions: [PermissionSchema],
        other: JSON
    }
})

module.exports = UserSchema