const express = require("express");
const { courseModel } = require("../models/course.model")
const courseRouter = express.Router();

courseRouter.post("/", async(req, res)=>{
    const courseData = req.body;
    const newCourse = new courseModel(courseData);
    await newCourse.save()
    res.send({"Message": "course added successfully"})
})

courseRouter.get("/", async(req, res)=>{
    const course = await courseModel.find()
    res.send({"Message": "This is the required course data", course: course});
})

courseRouter.get("/:instructor", async(req,res)=>{
    const {instructor} = req.params
    try {
        const courses = await courseModel.find({instructor: instructor})
        res.send({"Message": "These are the details of all the courses", courses})
    } catch (error) {
        res.send({"Message": "There has been an error", error})
    }
})

courseRouter.patch("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        await courseModel.findByIdAndUpdate({_id:id},req.body)
        res.send({"Message": "The course details has been updated"})
    } catch (error) {
        res.send({"Message": "There has been an error", error})
    }
})


courseRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        await courseModel.findByIdAndDelete({_id:id})
        res.send({"Message": "The user details has been deleted"})
    } catch (error) {
        res.send({"Message": "There has been an error", error})
    }
})
        
module.exports = { courseRouter }