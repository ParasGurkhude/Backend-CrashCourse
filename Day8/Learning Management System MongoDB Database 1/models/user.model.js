const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,

}, {
    versionKey: false
})

//constructor function 
const UserModel = mongoose.model("users", userSchema)

module.exports = { UserModel }