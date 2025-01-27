const express = require("express")
const { courseModel } = require("../models/course.model");
const courseRouter = express.Router()

courseRouter.post("/", async(req, res)=>{
    const courseData = req.body;
    const newCourse = new courseModel(courseData);
    await newCourse.save()
    res.send({"Message": "course added successfully"})
})

courseRouter.get("/", async (req, res) => {
    const { instructor, duration, capacity } = req.query
    const filter = {};
    if( instructor){
        filter.instructor = instructor;
    }
    if (duration) {
        filter.duration = duration;
    }
    if (capacity) {
        filter.capacity = capacity;
    }
    
    try {
        const courses = await courseModel.find(filter).sort({ dateAdded: -1 });
        res.send({ "Message": "These are the details of all courses", courses });
    } catch (error) {
        res.send({ "Message": "There has been an error", error });
    }
});


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