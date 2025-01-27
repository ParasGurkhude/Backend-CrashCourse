const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: String,
    instructor: String,
    duration: String,
    capacity: Number,
},{
    versionKey: false
});


const  courseModel = mongoose.model("courses", courseSchema);

module.exports = { courseModel }