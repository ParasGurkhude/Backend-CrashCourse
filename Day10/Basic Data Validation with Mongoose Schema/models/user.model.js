const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [3, 'Name must be at least 3 chars long, got {VALUE} ']
    },
    email: {
        type: String, 
        required: true, 
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/
    },
    age: {
        type: Number,
        min: [18, "Age should be greater than 18"],
        max: [65, "Age should be less than 65"]
    }
})

const UserModel =  mongoose.model("user-data", userSchema);
module.exports = { UserModel }