const express = require("express");
const { courseModel } = require("../models/course.model")
const courseRouter = express.Router();

courseRouter.post("/", async(req, res)=>{
    const courseData = req.body;
    const newCourse = new courseModel(courseData);
    await newCourse.save()
    res.send({"Message": "User added successfully"})
})

courseRouter.get("/", async(req, res)=>{
    const course = await courseModel.find()
    res.send({"Message": "This is the required course data", course: course});
})

module.exports = { courseRouter }