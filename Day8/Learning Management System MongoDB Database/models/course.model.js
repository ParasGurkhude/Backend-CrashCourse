const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: String,
    instructor: String,
    duration: String,
    maximum_capacity: Number
});


const  courseModel = mongoose.model("courses", courseSchema);

module.exports = { courseModel }