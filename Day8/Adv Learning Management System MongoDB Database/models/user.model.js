const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'courses' }]
}, {
    versionKey: false
})

//constructor function 
const UserModel = mongoose.model("users", userSchema)

module.exports = { UserModel }