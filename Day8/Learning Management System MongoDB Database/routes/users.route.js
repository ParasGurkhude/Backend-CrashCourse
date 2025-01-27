const express = require("express");
const { userModel } = require("../models/user.model")
const usersRouter = express.Router();

usersRouter.post("/", async(req, res)=>{
    const userData = req.body;
    const newUser = new userModel(userData);
    await newUser.save()
    res.send({"Message": "User added successfully"})
})

usersRouter.get("/", async(req, res)=>{
    const users = await userModel.find()
    res.send({"Message": "This is the required users data", users: users});
})

usersRouter.get("/role/:role", async (req, res) => {
    const role = req.params.role;
    const users = await userModel.find({ role: role });
    res.send({ "Message": `Users with role: ${role}`, users: users });
});

module.exports = { usersRouter }