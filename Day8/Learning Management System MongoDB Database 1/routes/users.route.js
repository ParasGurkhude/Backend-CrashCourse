const express = require("express");
const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

userRouter.post("/", async(req,res)=>{
    const payload = req.body;
    try {
        const newUser = new UserModel(payload);
        await newUser.save();
        res.send({"message": "The new user has been added to DB"})
    } catch (error) {
        res.send({"Message": "There has been an error", error})
    }
})

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