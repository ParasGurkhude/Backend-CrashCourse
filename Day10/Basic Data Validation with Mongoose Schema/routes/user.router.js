const express = require("express");
const { UserModel } = require("../models/user.model");

const userRouter = express.Router()

userRouter.post("/", async(req, res)=>{
    try {
        const user = new UserModel(req.body)
        await  user.save()
        res.status(200).json({user})
    } catch (error) {
        res.status(401).json({"message": "There has been an error", error: error.message})
    }
});

userRouter.get("/", async(req, res)=>{
    try {
        const users = await UserModel.find()
        res.status(200).json({users})
    } catch (error) {
        res.status(401).json({"message": "There has been an error", error: error.message})
    }
})

userRouter.patch("/:id", async(req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(
            req.params.id,
            req.body, // This is the update object
            { new: true } // This option ensures the updated document is returned
        );
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});


userRouter.delete("/:id", async(req, res)=>{
    try {
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json({"message": "User is successfully deleted"})
    } catch (error) {
        res.status(404).json({"message": "There has been an error", error: error.message})
    }
})


module.exports = { userRouter };