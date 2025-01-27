const express = require("express");
const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

userRouter.post("/:userId/enroll/:courseId", async (req, res) => {
    const {userId, courseId} = req.params;
    try {
        const user = await UserModel.findById(userId);
        if(user.role !== "student") {
            return res.status(400).send({"Message": "Only students can enroll in courses"});
        }
        if(user.enrolledCourses.includes(courseId)) {
            return res.status(400).send({"Message": "User already enrolled in the course"});
        }
        user.enrolledCourses.push(courseId);
        await user.save();
        res.send({"Message": "User successfully enrolled in the course"});
    } catch (error) {
        res.send({"Message": "There has been an error", error});
    }
});


userRouter.get("/", async(req,res)=>{
    try {
        const users = await UserModel.find()
        res.send({"message": "These are the details of all the users", users})
    } catch (error) {
        res.send({"Message": "There has been an error", error})
    }
})

userRouter.get("/:role", async(req,res)=>{
    const {role} = req.params
    try {
        const users = await UserModel.find({role: role})
        res.send({"message": "These are the details of all the users", users})
    } catch (error) {
        res.send({"Message": "There has been an error", error})
    }
})

userRouter.patch("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        await UserModel.findByIdAndUpdate({_id:id},req.body)
        res.send({"Message": "The user details has been updated"})
    } catch (error) {
        res.send({"Message": "There has been an error", error})
    }
})


userRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params
    try {
        await UserModel.findByIdAndDelete({_id:id})
        res.send({"Message": "The user details has been deleted"})
    } catch (error) {
        res.send({"Message": "There has been an error", error})
    }
})


module.exports = { userRouter }