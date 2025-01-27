const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String
});


const  userModel = mongoose.model("users", userSchema);

module.exports = { userModel }