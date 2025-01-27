const express = require("express")
const mongoose = require("mongoose");
const { usersRouter } = require("./routes/users.route");
const { courseRouter } = require("./routes/courses.route");

const PORT = 3000;
const app = express();
app.use(express.json())
app.use("/users", usersRouter)
app.use("/courses", courseRouter)

app.listen(PORT, ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/LMS_DB")
    console.log("Connected to DB")
    console.log("server is running on http://localhost:3000/")
})

